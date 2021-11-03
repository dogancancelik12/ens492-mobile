import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../constants/Colors";

function AddAddress({onPressDismiss, onPressAddAddress}) {
    return (
        <View style={{width: "100%", height: "95%"}}>
            <View style={{flexDirection: "row", marginTop: 40}}>
                <Text style={{padding: 10}}>Title:</Text>
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
                <Text style={{color:'white'}}>
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
        marginLeft:25,
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