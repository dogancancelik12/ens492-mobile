import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import {AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import RentBottomSheet from "../../components/RentBottomSheet";
import {COLORS} from "../../constants/Colors";
import {restService} from '../../service/restService';

function ProductDetail(props) {

    const [isRentBottomSheetVisible, setIsRentBottomSheetVisible] = useState(false)
    const [product, setProduct] = useState({})
    const navigation = useNavigation();
    const {productId} = props.route.params;

    useEffect(() => {
        getProductDetail()
    }, [productId])

    const getProductDetail = () => {
        restService.get(`products/productId/${productId}`)
            .then(response => {
                setProduct(response.data)
            })
    }

    return (
        <View style={{width: "100%", height: "100%"}}>
            <SurbiHeader title={product.name}
                         isNavigationVisible={true}
            />
            <Image style={styles.image} source={{uri: product.image}}/>
            <View style={styles.descriptionContainer}>
                <Text>{product.description}</Text>
            </View>
            <AirbnbRating starContainerStyle={{marginTop: 20}}
                          isDisabled={true}
                          showRating={false}
                          count={5}
                          defaultRating={product.rating}
                          size={20}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                                  onPress={() => setIsRentBottomSheetVisible(true)}>
                    <Text style={{color: COLORS.colorWhite}}>RENT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={() => navigation.navigate('Cart')}>
                    <Text style={{color: COLORS.colorWhite}}>BUY</Text>
                </TouchableOpacity>
            </View>
            {isRentBottomSheetVisible &&
            <RentBottomSheet costPerDay={product.pricePerDay} onCloseAction={() => setIsRentBottomSheetVisible(false)}/>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "95%",
        height: "30%",
        resizeMode: "cover",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 10,
    },
    descriptionContainer: {
        height: "40%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "60%",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
        marginTop: 30
    },
    button: {
        alignItems: 'center',
        backgroundColor: COLORS.colorPrimaryLight,
        padding: 10,
        borderRadius: 10,
        width: "40%",
        alignSelf: "center"
    },
});

export default ProductDetail;