import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from "../constants/Colors";

function PreviousOrderDetailItem({product}) {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.image}}/>
            <View>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>
            <Text style={styles.price}>{product.price}$</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.getColor().colorWhiteDark,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        height: "60%",
        width: "95%",
    },
    image: {
        width: 100,
        height: "100%",
        resizeMode: "cover",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    title: {
        marginLeft: 20,
        fontSize: 18,
        color: colors.getColor().colorPrimary
    },
    description: {
        marginLeft: 20,
        marginTop: 10
    },
    price: {
        position: "absolute",
        right: 10,
        bottom: 10,
        fontWeight: "700"
    }
});

export default PreviousOrderDetailItem;