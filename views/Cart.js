import React from 'react';
import {View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";
import CartProductItem from "../components/CartProductItem";
import {cartProducts} from "../constants/MockData";

function Cart() {

    const cartProductList = cartProducts.map(product =>
        <CartProductItem item={product}/>
    )

    return (
        <View style={{alignItems: "center"}}>
            <SurbiHeader title={"Cart"}
                         isNavigationVisible={true}
                         isCartVisible={false}
            />
            {cartProductList}
        </View>
    );
}

export default Cart;