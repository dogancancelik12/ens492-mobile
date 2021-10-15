import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SurbiPopUp from "./SurbiPopUp";

function CartProductItem({item}) {

    const [isPopUpVisible, setIsPopUpVisible] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item.image}}/>
            </View>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.text}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={{position: "absolute", top: 10, right: 10}}
                              onPress={() => setIsPopUpVisible(true)}>
                <FontAwesome5 name={"times-circle"}
                              size={18}/>
            </TouchableOpacity>
            {isPopUpVisible &&
            <SurbiPopUp negativeButtonAction={() => setIsPopUpVisible(false)}
                        positiveButtonAction={() => setIsPopUpVisible(false)}
                        title={"Do you want to remove this product from your cart ?"}
                        positiveButtonText={"Yes"}
                        negativeButtonText={"No"}/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.colorPrimaryLight,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        height: "10%",
        width: "95%",
    },
    imageContainer: {
        width: 80,
        height: "100%",
        backgroundColor: COLORS.colorPrimary,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: 60,
        width: 60,
        resizeMode: "cover",
        borderRadius: 5,
    },
    title: {
        marginLeft: 20,
        fontSize: 18
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

export default CartProductItem;