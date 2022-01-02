import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import CartProductItem from "../../components/CartProductItem";
import CartCheckout from "../../components/CartCheckout";
import {useNavigation} from "@react-navigation/native";
import {restService} from '../../service/restService';
import LottieView from 'lottie-react-native';

function Cart() {
    const [products, setProducts] = useState([]);
    const [promotionCode, setPromotionCode] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        getMyCart();
    }, [])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getMyCart();
        });
        return unsubscribe;
    }, [])

    const getMyCart = () => {
        restService.get('products/getMyCart')
            .then(response => {
                if (response.success) {
                    setProducts(response.data.cartItemsList);
                }
            })
    }

    const cartProductList = products.map(item => {
        console.log('AAA',item)
        return <CartProductItem key={item.name} product={item}
                                getMyCartProp={(product) => setProducts(product)}/>
    })

    return (
        <View style={{alignItems: "center", height: "100%", width: "100%"}}>
            <SurbiHeader
                isPromotionApplied={promotionCode}
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
                setPromotionCode={(promotionObject) => setPromotionCode(promotionObject)}
                products={products}
                buttonAction={() => navigation.navigate('Checkout', {promotionObject: promotionCode})}
                buttonText={"CHECK OUT"}
            />}
        </View>
    );
}

export default Cart;