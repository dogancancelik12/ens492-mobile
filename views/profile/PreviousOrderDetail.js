import React from "react";
import {ScrollView} from "react-native";
import SurbiHeader from "../../components/SurbiHeader";
import PreviousOrderDetailItem from "../../components/PreviousOrderDetailItem";

function PreviousOrderDetail(props) {

    const {cartItemList} = props.route.params;

    const cartItemListRender = cartItemList.map((cartItem) => {
        return <PreviousOrderDetailItem product={cartItem} />
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
