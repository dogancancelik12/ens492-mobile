import React from 'react';
import {View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import CartProductItem from "../../components/CartProductItem";
import {cartProducts} from "../../constants/MockData";
import CartCheckout from "../../components/CartCheckout";
import {useNavigation} from "@react-navigation/native";

function Cart() {

    const navigation = useNavigation();

    const cartProductList = cartProducts.map(product =>
        <CartProductItem key={product.id} item={product}/>
    )

    return (
        <View style={{alignItems: "center", height: "100%", width: "100%"}}>
            <SurbiHeader
                title={"Cart"}
                isNavigationVisible={true}
                isCartVisible={false}
            />
            {cartProductList}
            <CartCheckout
                buttonAction={() => navigation.navigate('Checkout')}
                buttonText={"CHECK OUT"}
            />
        </View>
    );
}

export default Cart;