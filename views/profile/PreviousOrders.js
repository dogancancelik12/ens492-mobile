import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {previousOrders} from "../../constants/MockData";
import {useNavigation} from "@react-navigation/native";
import SurbiHeader from "../../components/SurbiHeader";
import OrdersItem from "../../components/OrdersItem";

function PreviousOrders() {

    const navigation = useNavigation();

    const ordersList = previousOrders.map(order =>
        <OrdersItem key={order.id} item={order}/>
    )

    return (
        <View style={{alignItems: "center", height: "100%", width: "100%"}}>
            <SurbiHeader
                title={"PreviousOrders"}
                isNavigationVisible={true}
                isCartVisible={false}
            />
            <ScrollView style={styles.scrollView}>
                {ordersList}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        height: "50%",
        width: "170%",
    },
});

export default PreviousOrders;