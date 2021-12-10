import React, {useEffect, useState} from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../constants/Colors";
import {restService} from "../service/restService";
import RatingPopUp from "./RatingPopUp";

function PreviousOrderDetailItem({product, cartStatus}) {

    const [isPopUpVisible, setIsPopUpVisible] = useState(false)
    const [isRated, setIsRated] = useState(null)

    useEffect(() => {
        checkIsRated()
    }, [])

    const giveRating = (rating) => {
        const ratingBody = {
            rating: rating,
            productId: product.productId
        }
        restService.post('products/giveRating', ratingBody)
            .then(response => {
                if (response.success) {
                    setIsPopUpVisible(false)
                    setTimeout(() => {
                        Alert.alert(response.message)
                    }, 700);
                    checkIsRated()
                } else {
                    setIsPopUpVisible(false)
                    Alert.alert(response.message)
                }
            })
    }

    const checkIsRated = () => {
        restService.get(`products/isRated/${product.productId}`)
            .then(response => {
                if (response.success) {
                    setIsRated(response.data)
                } else {
                    setIsRated(response.data)
                }
            })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.image}}/>
            <View>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>
            <Text style={styles.price}>{product.price}$</Text>
            {cartStatus === 'COMPLETED' &&
            <TouchableOpacity
                disabled={isRated}
                onPress={() => setIsPopUpVisible(true)}
                style={isRated ? [styles.button, {backgroundColor: 'grey'}] : styles.button}>
                <Text style={{color: colors.getColor().colorWhite}}>Rate</Text>
            </TouchableOpacity>
            }
            {isPopUpVisible &&
            <RatingPopUp title={`Rate ${product.name}`}
                         positiveButtonText={"Confirm"}
                         negativeButtonText={"Cancel"}
                         positiveButtonAction={(rating) => giveRating(rating)}
                         negativeButtonAction={() => setIsPopUpVisible(false)}/>
            }
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
        height: 90,
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
    },
    button: {
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        width: "15%",
        alignSelf: "center",
        backgroundColor: colors.getColor().colorSecondary,
        position: "absolute",
        right: 8,
        top: 8
    },
});

export default PreviousOrderDetailItem;