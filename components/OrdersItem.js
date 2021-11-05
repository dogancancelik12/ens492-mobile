import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function OrdersItem({item}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("OrderDetail")}}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View>
                    <Text style={styles.status}>{item.status}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
                <FontAwesome5 name={"arrow-right"}
                              style={{position: "absolute", right: 10, alignSelf: 'center'}}
                              size={25}
                              color={COLORS.colorPrimaryLight}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        height: "50%",
        width: "55%",
        flex: 1,
        marginLeft: 150
    },
    image: {
        height: 120,
        width: 120,
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