import React from 'react';
import {View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";

function ProductDetail(props) {

    const {productName} = props.route.params;

    return (
        <View>
            <SurbiHeader title={productName}
                         isNavigationVisible={true}
            />
        </View>
    );
}

export default ProductDetail;