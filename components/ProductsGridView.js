import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import LottieView from 'lottie-react-native';
import {COLORS} from "../constants/Colors";

function ProductsGridView({products}) {

    const navigation = useNavigation();

    function renderProduct({item}) {
        return (
            <TouchableOpacity
                style={styles.carouselItem}
                onPress={() => {
                    navigation.navigate("ProductDetail", {
                        productId: item.id
                    });
                }}
            >
                <Image style={styles.carouselImage} source={{uri: item.image}}/>
                <Text style={styles.carouselTitle}>{item.name}</Text>
                <Text style={styles.carouselPrice}>{item.price}$</Text>
            </TouchableOpacity>
        );
    }

    if (products && products.length === 0) {
        return <View style={{alignItems: "center", marginTop: 30}}>
            <LottieView
                style={{height: 150}}
                source={require('../constants/thisPlaceIsEmpty.json')}
                autoPlay
                loop
            />
            <Text style={{width: 200, textAlign: 'center', marginTop: 10}}>
                Sorry, we couldn't find any products matching
                your search criteria.
            </Text>
        </View>
    }
    return (
        <View style={{alignItems: "center"}}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                style={{height: "100%", width: "100%"}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    carouselItem: {
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 5,
        height: 140,
        width: "28%",
        marginTop: 15,
        alignItems: "center",
        margin: 10,
    },
    carouselImage: {
        height: 80,
        width: "100%",
        resizeMode: "stretch",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    carouselTitle: {
        fontSize: 16,
        marginTop: 10,
        alignSelf: "center",
        fontWeight: "500",
        color: COLORS.colorPrimary
    },
    carouselDescription: {
        fontSize: 14,
        marginTop: 5,
        marginLeft: 15,
        alignSelf: "flex-start"
    },
    carouselPrice: {
        marginTop: 3,
    }
});

export default ProductsGridView;