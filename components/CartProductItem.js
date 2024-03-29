import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SurbiPopUp from "./SurbiPopUp";
import {restService} from "../service/restService";
import moment from 'moment';

function CartProductItem({product, getMyCartProp}) {

    const [isPopUpVisible, setIsPopUpVisible] = useState(false)

    const deleteFromCart = (productId) => {
        restService.post(`products/deleteFromCart/${productId}`)
            .then(response => {
                getMyCart()
            })
    }

    const addToCart = (productId) => {
        let startDate = null
        let endDate = null
        let requestObj = {
            productId: productId,
            rentStartDate: moment(startDate),
            rentEndDate: moment(endDate)
        }
        restService.post('products/addToCart', requestObj)
            .then(response => {
                getMyCart()
            })
    }

    const getMyCart = () => {
        restService.get('products/getMyCart')
            .then(response => {
                getMyCartProp(response.data.cartItemsList);
            })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.image}}/>
            <View>
                <Text style={styles.title}>{product.name}</Text>
                {product.rentStartDate &&
                <Text
                    style={styles.description}>{moment(product.rentStartDate).format("MMMM Do") + '-' + moment(product.rentEndDate).format("MMMM Do")}</Text>}
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.description}>Quantity: </Text>
                    <TouchableOpacity
                        onPress={() => deleteFromCart(product.id)}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginTop: 10,
                            backgroundColor: 'white',
                            borderRadius: 18,
                            padding: 5
                        }}>
                        <FontAwesome5 size={8} name={'minus'}/>
                    </TouchableOpacity>
                    <Text style={{marginTop: 10, marginHorizontal: 5, fontWeight: 'bold'}}>{product.quantity}</Text>
                    <TouchableOpacity
                        onPress={() => addToCart(product.productId)}
                        style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 10,
                        backgroundColor: 'white',
                        borderRadius: 18,
                        padding: 5
                    }}>
                        <FontAwesome5 size={8} name={'plus'}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.price}>{product.price}$</Text>
            <TouchableOpacity style={{position: "absolute", top: 10, right: 10}}
                              onPress={() => setIsPopUpVisible(true)}>
                <FontAwesome5 name={"times-circle"}
                              size={18}
                              color={colors.getColor().colorPrimaryLight}
                />
            </TouchableOpacity>
            {isPopUpVisible &&
            <SurbiPopUp negativeButtonAction={() => setIsPopUpVisible(false)}
                        positiveButtonAction={() => {
                            setIsPopUpVisible(false);
                            deleteFromCart(product.id)
                        }}
                        title={"Do you want to remove this product from your cart ?"}
                        positiveButtonText={"Yes"}
                        negativeButtonText={"No"}/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.getColor().colorWhiteDark,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        height: "10%",
        width: "95%",
    },
    image: {
        width: 100,
        height: "100%",
        resizeMode: "cover",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    title: {
        marginLeft: 20,
        fontSize: 18,
        color: colors.getColor().colorPrimary
    },
    description: {
        marginLeft: 20,
        marginTop: 10
    },
    price: {
        position: "absolute",
        right: 10,
        bottom: 10,
        fontWeight: "700"
    }
});

export default CartProductItem;