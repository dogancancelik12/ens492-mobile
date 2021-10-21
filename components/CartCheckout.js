import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../constants/Colors";

function CartCheckout({buttonText, buttonAction}) {

    return (
        <View style={styles.container}>
            <View style={styles.priceContainer}>
                <Text style={styles.staticText}>Sub Total</Text>
                <Text style={styles.priceText}>170$</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.staticText}>Shipping</Text>
                <Text style={styles.priceText}>10$</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.staticText}>Total</Text>
                <Text style={styles.priceText}>180$</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={buttonAction}>
                <Text>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOpacity: 0.2,
        backgroundColor: COLORS.colorPrimaryLight,
        height: "25%",
        width: "85%",
        alignSelf: "center"
    },
    staticText: {
        marginLeft: 30,
        marginTop: 13
    },
    priceText: {
        marginTop: 13,
        marginRight: 30,
        fontWeight: "500"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        width: "70%",
        alignSelf: "center"
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default CartCheckout;