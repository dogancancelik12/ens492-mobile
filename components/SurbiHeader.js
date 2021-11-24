import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {colors} from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";
import {restService} from '../service/restService';

function SurbiHeader({title, isCartVisible = true, isNavigationVisible = false, quantityProp}) {

    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(quantityProp);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getCartQuantity();
        });
        return unsubscribe;
    }, [])

    useEffect(() => {
        getCartQuantity();
    }, [quantityProp])

    const getCartQuantity = () => {
        restService.get('products/getMyCart')
            .then(response => {
                if (response.success) {
                    setQuantity(response.data.quantity)
                }
            })
    }

    return (
        <View style={{width: "100%", backgroundColor: colors.getColor().colorPrimary, height: 80}}>
            <View style={{
                flexDirection: "row",
                display: "flex",
                marginTop: 40,
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {isNavigationVisible &&
                <TouchableOpacity
                    style={{position: "absolute", left: 20}}
                    onPress={() => navigation.goBack()}
                >
                    <FontAwesome5
                        name={"chevron-left"}
                        size={20}
                        color={colors.getColor().colorWhite}
                    />
                </TouchableOpacity>}
                <Text style={{fontSize: 24, color: "white"}}> {title} </Text>
                {isCartVisible &&
                <TouchableOpacity
                    style={{position: "absolute", right: 20, alignItems: 'center'}}
                    onPress={() => navigation.navigate("Cart")}>
                    {quantity > 0 &&
                    <View style={{
                        zIndex: 10,
                        marginBottom: -6,
                        marginLeft: -10,
                        width: 20,
                        backgroundColor: colors.getColor().colorSecondary,
                        borderRadius: 20,
                        alignItems: 'center'
                    }}>
                        <Text>{quantity}</Text>
                    </View>}
                    <FontAwesome5
                        style={{zIndex: 1}}
                        name={"shopping-cart"}
                        size={18}
                        color={colors.getColor().colorWhite}
                    />
                </TouchableOpacity>}
            </View>
        </View>
    );
}

export default SurbiHeader;