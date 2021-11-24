import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import OrdersItem from "../../components/OrdersItem";
import {restService} from "../../service/restService";
import {colors} from "../../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function PreviousOrders() {

    const [shippedOrders, setShippedOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);
    const [isShippedOrdersVisible, setIsShippedOrdersVisible] = useState(false);
    const [isCompletedOrdersVisible, setIsCompletedOrdersVisible] = useState(false);

    useEffect(() => {
        getMyPreviousOrders();
    }, [])

    const getMyPreviousOrders = () => {
        restService.get('products/getMyPreviousOrders')
            .then(response => {
                setShippedOrders(response.data.shippedOrders);
                setCompletedOrders(response.data.completedOrders);
            })
    }

    const shippedOrdersList = shippedOrders.map(order =>
        <OrdersItem key={order.id} item={order}/>
    )

    const completedOrdersList = completedOrders.map(order =>
        <OrdersItem key={order.id} item={order}/>
    )


    return (
        <View style={{height: "100%", width: "100%"}}>
            <SurbiHeader
                title={"Previous Orders"}
                isNavigationVisible={true}
                isCartVisible={false}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <TouchableOpacity style={styles.button}
                                  onPress={() => {
                                      setIsShippedOrdersVisible(!isShippedOrdersVisible)
                                  }}>
                    <Text style={{color: "white"}}>CURRENT ORDERS</Text>
                    <FontAwesome5 name={isShippedOrdersVisible ? "chevron-down" : "chevron-up"}
                                  size={20}
                                  color={"white"}/>
                </TouchableOpacity>
                {isShippedOrdersVisible &&
                shippedOrdersList
                }
                <TouchableOpacity style={styles.button}
                                  onPress={() => {
                                      setIsCompletedOrdersVisible(!isCompletedOrdersVisible)
                                  }}>
                    <Text style={{color: "white"}}>COMPLETED ORDERS</Text>
                    <FontAwesome5 name={isCompletedOrdersVisible ? "chevron-down" : "chevron-up"}
                                  size={20}
                                  color={"white"}/>
                </TouchableOpacity>
                {isCompletedOrdersVisible &&
                completedOrdersList
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        width: "95%",
        alignSelf: "center"
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.getColor().colorPrimaryLight,
        padding: 10,
        borderRadius: 10,
        width: "95%",
        alignSelf: "center",
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
});

export default PreviousOrders;