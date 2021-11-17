import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SurbiPopUp from "./SurbiPopUp";
import {restService} from "../service/restService";

function CartProductItem({product, getMyCartProp}) {

    const [isPopUpVisible, setIsPopUpVisible] = useState(false)

    const deleteFromCart = (productId) => {
        restService.post(`products/deleteFromCart/${productId}`)
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
                <Text style={styles.description}>{product.description}</Text>
            </View>
            <Text style={styles.price}>{product.price}$</Text>
            <TouchableOpacity style={{position: "absolute", top: 10, right: 10}}
                              onPress={() => setIsPopUpVisible(true)}>
                <FontAwesome5 name={"times-circle"}
                              size={18}
                              color={COLORS.colorPrimaryLight}
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
        backgroundColor: COLORS.colorWhiteDark,
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
        color: COLORS.colorPrimary
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