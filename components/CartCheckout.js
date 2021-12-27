import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from "../constants/Colors";
import {restService} from '../service/restService';

function CartCheckout({buttonText, buttonAction, products, setPromotionCode, existingPromoCode}) {
    const [subtotal, setSubtotal] = useState(0);
    const [productsToBuy, setProductsToBuy] = useState(products)
    const [promoCode, setPromoCode] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        getMyCart()
    }, [products])

    useEffect(() => {
        if (existingPromoCode && Object.keys(existingPromoCode).length > 0) {
            setIsDisabled(true)
            setDiscount(existingPromoCode.discount)
        }
    }, [existingPromoCode])

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
                total = total + product.price * product.quantity
            }
            setSubtotal(total)
        }
    }

    const applyPromoCode = () => {
        if (promoCode === '') {
            Alert.alert('Warning', 'Please enter promotion code. You can find any available code on homepage!')
            return
        }
        restService.post(`promotions/applyPromoCode/${promoCode}`).then(response => {
            if (response.success === false) {
                Alert.alert('Warning', response.message)
            } else {
                setDiscount(response.data)
                setIsDisabled(true)
                let promotionObject = {
                    promoCode: promoCode,
                    discount: response.data
                }
                if (!existingPromoCode) {
                    setPromotionCode(promotionObject)
                }
            }
        })
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
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: existingPromoCode || !(discount === 0) ? 0 : 1,
                paddingBottom: 10
            }}>
                <Text style={styles.staticText}>Promotion Code</Text>
                <TextInput onChangeText={(text) => setPromoCode(text)}
                           editable={(existingPromoCode ? false : true) || (discount === 0)}
                           value={existingPromoCode && existingPromoCode.promoCode}
                           placeholder={'Your code'} autoCapitalize={'none'} style={{
                    padding: 5,
                    marginTop: 13,
                    marginRight: 15,
                    width: 80,
                    height: 25,
                    backgroundColor: 'white'
                }}/>
                <TouchableOpacity
                    onPress={() => applyPromoCode()}
                    disabled={isDisabled}
                    style={{
                        marginTop: 10,
                        marginRight: 18,
                        borderRadius: 10,
                        backgroundColor: colors.getColor().colorSecondary,
                        padding: 5
                    }}>
                    <Text>{isDisabled ? 'Applied' : 'Apply'}</Text>
                </TouchableOpacity>
            </View>
            {((existingPromoCode && Object.keys(existingPromoCode).length > 0) || discount !== 0) &&
            <View style={{alignItems: 'flex-end', marginTop: -10, borderBottomWidth: 1, paddingBottom: 5}}>
                <Text
                    style={styles.priceText}>{existingPromoCode && Object.keys(existingPromoCode).length > 0 ? existingPromoCode.discount : discount}$</Text>
            </View>}
            <View style={styles.priceContainer}>
                <Text style={styles.staticText}>Total</Text>
                <Text
                    style={styles.priceText}>{subtotal + 10 + discount}$</Text>
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
        bottom: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOpacity: 0.2,
        backgroundColor: colors.getColor().colorWhiteDark,
        height: "28%",
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
        fontWeight: "500",
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.getColor().colorPrimaryLight,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: "70%",
        alignSelf: "center"
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default CartCheckout;