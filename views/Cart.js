import React from 'react';
import {View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";

function Cart() {
    return (
        <View>
            <SurbiHeader title={"Cart"}
                         isNavigationVisible={true}
                         isCartVisible={false}
            />
        </View>
    );
}

export default Cart;