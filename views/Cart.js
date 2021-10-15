import React from 'react';
import {View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";
import CartProductItem from "../components/CartProductItem";
import {cartProducts} from "../constants/MockData";
import CartCheckout from "../components/CartCheckout";

function Cart() {

    const cartProductList = cartProducts.map(product =>
        <CartProductItem key={product.id} item={product}/>
    )

    return (
        <View style={{alignItems: "center", height: "100%", width: "100%"}}>
            <SurbiHeader title={"Cart"}
                         isNavigationVisible={true}
                         isCartVisible={false}
            />
            {cartProductList}
            <CartCheckout/>
        </View>
    );
}

export default Cart;