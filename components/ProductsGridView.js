import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import LottieView from 'lottie-react-native';

function ProductsGridView({products}) {

    const navigation = useNavigation();

    function renderProduct({item}) {
        return (
            <TouchableOpacity
                style={styles.carouselItem}
                onPress={() => {
                    navigation.navigate("ProductDetail", {
                        productName: item.title
                    });
                }}
            >
                <Image style={styles.carouselImage} source={{uri: item.image}}/>
                <Text style={styles.carouselTitle}>{item.title}</Text>
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
        backgroundColor: '#e0e3ec',
        borderRadius: 5,
        height: 120,
        width: "28%",
        marginTop: 15,
        alignItems: "center",
        margin: 10,
    },
    carouselImage: {
        height: 70,
        width: "100%",
        resizeMode: "stretch",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    carouselTitle: {
        fontSize: 14,
        marginTop: 20,
        alignSelf: "center",
    },
    carouselDescription: {
        fontSize: 14,
        marginTop: 5,
        marginLeft: 15,
        alignSelf: "flex-start"
    }
});

export default ProductsGridView;