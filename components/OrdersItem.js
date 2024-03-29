import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import moment from "moment";
import localization from 'moment/locale/tr'
import {useNavigation} from "@react-navigation/native";

function OrdersItem({item}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{width: "100%"}}
                          onPress={() => navigation.navigate('PreviousOrderDetail', {
                              cartItemList: item.cartItemsList,
                              cartStatus: item.cartStatus
                          })}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
                <View>
                    <Text style={styles.status}>{item.cartStatus}</Text>
                    <Text
                        style={styles.date}>{item.completedDate ? moment(item.completedDate).locale("tr", localization).format('l') : '-'}</Text>
                    <Text style={styles.price}>{item.totalPrice}$</Text>
                </View>
                <FontAwesome5 name={"arrow-right"}
                              style={{position: "absolute", right: 10, alignSelf: 'center'}}
                              size={25}
                              color={colors.getColor().colorPrimaryLight}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.getColor().colorWhiteDark,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        height: "20%",
        flex: 1,
        width: "100%"
    },
    image: {
        height: 80,
        width: 100,
        resizeMode: "cover",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    title: {
        marginLeft: 20,
        fontSize: 15,
        color: 'grey',
        fontWeight: "700",
    },
    status: {
        marginLeft: 20,
        marginBottom: 5,
        fontSize: 15,
        color: 'green',
        fontWeight: "700",
    },
    date: {
        marginLeft: 20,
        marginBottom: 3,
        fontSize: 15,
        color: 'black',
        fontWeight: "700",

    },
    price: {
        marginLeft: 20,
        fontSize: 15,
        color: 'grey',
        fontWeight: "700",
    }
});

export default OrdersItem;