import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../constants/Colors";
import {restService} from '../service/restService';

function CartCheckout({buttonText, buttonAction, products}) {
    const [subtotal, setSubtotal] = useState(0);
    const [productsToBuy, setProductsToBuy] = useState(products)

    useEffect(() => {
        getMyCart()
    }, [products])

    const getMyCart = () => {
        restService.get('products/getMyCart')
            .then(response => {
                if (response.success) {
                    setProductsToBuy(response.data.cartItemsList);
                    getTotal();
                }
            })
    }

    const getTotal = () => {
        let total = 0;
        if (products) {
            for (let product of products) {
                total = total + product.price
            }
            setSubtotal(total)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.priceContainer}>
                <Text style={styles.staticText}>Sub Total</Text>
                <Text style={styles.priceText}>{subtotal}$</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.staticText}>Shipping</Text>
                <Text style={styles.priceText}>10$</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.staticText}>Total</Text>
                <Text style={styles.priceText}>{subtotal + 10}$</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={buttonAction}>
                <Text style={{color: colors.getColor().colorWhite}}>{buttonText}</Text>
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
        backgroundColor: colors.getColor().colorWhiteDark,
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
        backgroundColor: colors.getColor().colorPrimaryLight,
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