import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {COLORS} from "../constants/Colors";

function AddAddress({onPressDismiss, onPressAddAddress}) {
    return (
        <View style={{width: "100%", height: "100%"}}>
            <TouchableOpacity style={{position: "absolute", top: 10, right: 10}} onPress={onPressDismiss}>
                <FontAwesome5 name={"times-circle"}
                              size={18}/>
            </TouchableOpacity>
            <View style={{flexDirection: "row", marginTop: 40}}>
                <Text style={{padding: 10}}>Address Title:</Text>
                <TextInput
                    style={styles.addAddressTitle}
                    placeholder={"Address Title"}/>
            </View>
            <View style={{flexDirection: "row", marginTop: 20}}>
                <Text style={{padding: 10}}>Address:</Text>
                <TextInput
                    style={styles.addAddress}
                    placeholder={"Address"}/>
            </View>
            <TouchableOpacity
                onPress={onPressAddAddress}
                style={styles.button}>
                <Text>
                    Add Address
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        width: "70%",
        alignSelf: "center"
    },
    addAddressTitle: {
        backgroundColor: COLORS.colorPrimaryLight,
        width: "70%",
        borderRadius: 10,
        padding: 10
    },
    addAddress: {
        backgroundColor: COLORS.colorPrimaryLight,
        width: "78%",
        borderRadius: 10,
        padding: 10
    }
});

export default AddAddress;