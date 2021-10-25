import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";
import {AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';

function ProductDetail(props) {

    const navigation = useNavigation();
    const {productName} = props.route.params;

    return (
        <View style={{width: "100%", height: "100%"}}>
            <SurbiHeader title={productName}
                         isNavigationVisible={true}
            />
            <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
            <View style={styles.descriptionContainer}>
                <Text>Description</Text>
            </View>
            <AirbnbRating starContainerStyle={{marginTop: 20}}
                          isDisabled={true}
                          showRating={false}
                          count={5}
                          defaultRating={3}
                          size={20}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                                  onPress={() => navigation.navigate('RentScreen')}>
                    <Text>RENT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={() => navigation.navigate('Cart')}>
                    <Text>BUY</Text>
                </TouchableOpacity>
            </View>


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
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 10,
        width: "40%",
        alignSelf: "center"
    },
});

export default ProductDetail;