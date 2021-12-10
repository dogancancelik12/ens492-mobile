import React from "react";
import {ScrollView} from "react-native";
import SurbiHeader from "../../components/SurbiHeader";
import PreviousOrderDetailItem from "../../components/PreviousOrderDetailItem";

function PreviousOrderDetail(props) {

    const {cartItemList, cartStatus} = props.route.params;

    const cartItemListRender = cartItemList.map((cartItem) => {
        return <PreviousOrderDetailItem key={cartItem.id} cartStatus={cartStatus} product={cartItem} />
    })

    return (
        <>
            <SurbiHeader title={"Order Detail"}
                         isNavigationVisible={true}
                         isCartVisible={false}/>
            <ScrollView contentContainerStyle={{alignItems: "center"}}>
                {cartItemListRender}
            </ScrollView>
        </>
    );
}

export default PreviousOrderDetail;
