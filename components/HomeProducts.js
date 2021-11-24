import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors} from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";
import {AirbnbRating} from 'react-native-ratings';

function HomeProducts({title, products}) {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{fontSize: 18, marginLeft: 15, marginBottom: 15, marginTop: 10}}>{title}</Text>
            <View style={styles.container}>
                {products.map(product => {
                    return <TouchableOpacity
                        style={styles.carouselItem}
                        onPress={() => {
                            navigation.navigate("ProductDetail", {
                                productId: product.id
                            });
                        }}>
                        <Image style={styles.carouselImage} source={{uri: product.image}}/>
                        <Text numberOfLines={1} style={styles.carouselTitle}>{product.name}</Text>
                        <AirbnbRating starContainerStyle={{marginTop: 2}}
                                      isDisabled={true}
                                      showRating={false}
                                      count={5}
                                      defaultRating={product.rating}
                                      size={14}
                        />
                    </TouchableOpacity>
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: colors.getColor().colorWhiteDark,
        height: 150,
        alignItems: "center"
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 5
    },
    imageContainer: {
        height: "80%",
        width: "25%"
    },
    carouselItem: {
        backgroundColor: colors.getColor().colorWhiteDark,
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
        color: colors.getColor().colorPrimary
    },
});


export default HomeProducts;