import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import CartProductItem from "../../components/CartProductItem";
import {cartProducts} from "../../constants/MockData";
import CartCheckout from "../../components/CartCheckout";
import {useNavigation} from "@react-navigation/native";
import {restService} from '../../service/restService';
import LottieView from 'lottie-react-native';

function Cart() {
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        getMyCart();
    }, [])

    const getMyCart = () => {
        restService.get('products/getMyCart')
            .then(response => {
                setProducts(response.data.cartProductsDTOList);
            })
    }

    const cartProductList = products.map(item => {
        return <CartProductItem key={item.name} product={item.product}/>
    })

    return (
        <View style={{alignItems: "center", height: "100%", width: "100%"}}>
            <SurbiHeader
                title={"Cart"}
                isNavigationVisible={true}
                isCartVisible={false}
            />
            {products.length > 0 ? cartProductList : <LottieView
                style={{height: 250, position: 'absolute', bottom: 30}}
                source={require('../../constants/emptyCart.json')}
                autoPlay
                loop
            />}
            {products.length > 0 &&
            <CartCheckout
                buttonAction={() => navigation.navigate('Checkout')}
                buttonText={"CHECK OUT"}
            />}
        </View>
    );
}

export default Cart;