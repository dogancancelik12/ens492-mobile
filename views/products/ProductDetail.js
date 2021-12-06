import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import {AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import RentBottomSheet from "../../components/RentBottomSheet";
import {colors} from "../../constants/Colors";
import {restService} from '../../service/restService';

function ProductDetail(props) {

    const [isRentBottomSheetVisible, setIsRentBottomSheetVisible] = useState(false)
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)
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

    const addToCart = () => {
        restService.get(`products/addToCart/${productId}`)
            .then(response => {
                setQuantity(response.data)
            })
    }

    return (
        <View style={{width: "100%", height: "100%"}}>
            <SurbiHeader title={product.name}
                         isNavigationVisible={true}
                         quantityProp={quantity}
            />
            <Image style={styles.image} source={{uri: product.image}}/>
            <View style={{height: '40%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{padding: 5, textDecorationLine: 'underline', fontWeight: 'bold', fontSize: 16}}>Product
                            Type</Text>
                        <Text>{product.productType}</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text
                            style={{
                                padding: 5,
                                textDecorationLine: 'underline',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Price</Text>
                        <Text>{product.price}$</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{padding: 5, textDecorationLine: 'underline', fontWeight: 'bold', fontSize: 16}}>Product
                            Speed</Text>
                        <Text>{product.speed ? product.speed + ' km/h' : '-'}</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text
                            style={{
                                padding: 5,
                                textDecorationLine: 'underline',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Weight</Text>
                        <Text>{product.weight} kg</Text>
                    </View>
                </View>
            </View>
            <Text style={{textAlign: 'center', textDecorationLine: 'underline', fontWeight: 'bold'}}>Average
                Rating</Text>
            <AirbnbRating starContainerStyle={{marginTop: 5}}
                          isDisabled={true}
                          showRating={false}
                          count={5}
                          defaultRating={product.rating}
                          size={20}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                                  onPress={() => setIsRentBottomSheetVisible(true)}>
                    <Text style={{color: colors.getColor().colorWhite}}>RENT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={() => addToCart()}>
                    <Text style={{color: colors.getColor().colorWhite}}>BUY</Text>
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
        backgroundColor: colors.getColor().colorPrimaryLight,
        padding: 10,
        borderRadius: 10,
        width: "40%",
        alignSelf: "center"
    },
});

export default ProductDetail;