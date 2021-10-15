import React from 'react';
import {View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";

function Checkout() {
    return (
        <View>
            <SurbiHeader
                title={"Checkout"}
                isNavigationVisible={true}
                isCartVisible={false}/>

        </View>
    );
}

export default Checkout;