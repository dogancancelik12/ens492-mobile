import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../constants/Colors";
import {restService} from "../service/restService";

function AddAddress({onDismiss, getAddresses}) {

    const [addressTitle, setAddressTitle] = useState(null)
    const [addressDescription, setAddressDescription] = useState(null)
    const newAddressBody = {
        addressTitle: addressTitle,
        addressDescription: addressDescription
    }

    const addAddress = (newAddress) => {
        restService.post('addresses/addAddress', newAddress)
            .then(response => {
                    if (response.success) {
                        onDismiss()
                        Alert.alert('Address added successfully')
                        getAddresses()
                    } else {
                        Alert.alert(response.message)
                    }
                }
            )
    }

    return (
        <View style={{width: "100%", height: "95%"}}>
            <View style={{flexDirection: "row", marginTop: 40}}>
                <Text style={{padding: 10}}>Title:</Text>
                <TextInput
                    onChangeText={(addressTitle) => setAddressTitle(addressTitle)}
                    style={styles.addAddressTitle}
                    placeholder={"Address Title"}/>
            </View>
            <View style={{flexDirection: "row", marginTop: 20}}>
                <Text style={{padding: 10}}>Address:</Text>
                <TextInput
                    onChangeText={(addressDescription) => setAddressDescription(addressDescription)}
                    style={styles.addAddress}
                    placeholder={"Address"}/>
            </View>
            <TouchableOpacity
                onPress={() => addAddress(newAddressBody)}
                style={styles.button}>
                <Text style={{color: 'white'}}>
                    ADD ADDRESS
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: COLORS.colorPrimaryLight,
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        width: "70%",
        alignSelf: "center"
    },
    addAddressTitle: {
        backgroundColor: COLORS.colorWhiteDark,
        width: "78%",
        marginLeft: 25,
        borderRadius: 10,
        padding: 10
    },
    addAddress: {
        backgroundColor: COLORS.colorWhiteDark,
        width: "78%",
        borderRadius: 10,
        padding: 10
    }
});

export default AddAddress;