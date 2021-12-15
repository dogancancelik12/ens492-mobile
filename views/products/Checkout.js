import React, {useEffect, useRef, useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import {colors} from "../../constants/Colors";
import {CheckBox} from 'react-native-elements'
import CartCheckout from "../../components/CartCheckout";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import RBSheet from "react-native-raw-bottom-sheet";
import AddAddress from "../../components/AddAddress";
import {restService} from "../../service/restService";
import CreditCardItem from "../../components/CreditCardItem";

function Checkout() {

    const navigation = useNavigation();
    const [selectedAddressId, setSelectedAddressId] = useState(null)
    const [addresses, setAddresses] = useState(null)
    const [myCreditCards, setMyCreditCards] = useState([])
    const [selectedCardId, setSelectedCardId] = useState(null)
    const [products, setProducts] = useState([])

    const refRBSheet = useRef();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getMyCart();
            getMyAddresses();
            getMyCards()
        });
        return unsubscribe;
    }, [])


    function handleSuccessfulPayment() {
        navigation.navigate('Home');
        Alert.alert("Successful")
    }

    const getMyCards = () => {
        restService.get("/creditCard/getMyCards")
            .then((response) => {
                if (response.success) {
                    setMyCreditCards(response.data)
                }
            })
    }

    const getMyAddresses = () => {
        restService.get('addresses/getMyAddresses')
            .then(response => {
                setAddresses(response.data);
            })
    }

    const getMyCart = () => {
        restService.get('products/getMyCart')
            .then(response => {
                if (response.success) {
                    setProducts(response.data.cartItemsList);
                }
            })
    }

    function renderAddress({item}) {
        return (
            <View style={styles.addressContainer}>
                <View style={styles.container}>
                    <View>
                        <Text style={{marginLeft: 15, color: colors.getColor().colorPrimary}}>{item.addressTitle}</Text>
                        <Text style={{marginLeft: 15, marginTop: 3}}>{item.addressDescription}</Text>
                    </View>
                    <CheckBox
                        checkedColor={colors.getColor().colorPrimaryLight}
                        size={30}
                        checked={selectedAddressId === item.id}
                        onPress={() => setSelectedAddressId(item.id)}
                    />
                </View>
            </View>
        )
    }

    function renderCreditCards({item}) {
        return (
            <View style={[styles.addressContainer, {width: 200, margin: 10, marginTop: -100, height: 130, backgroundColor: colors.getColor().colorPrimaryLight}]}>
                <View style={styles.container}>
                    <View>
                        <Text style={{marginLeft: 15, color: colors.getColor().colorWhite}}>{item.cardTitle}</Text>
                        <Text style={{marginLeft: 15, marginTop: 3, color: colors.getColor().colorWhite}}>{item.cardNumber}</Text>
                    </View>
                    <CheckBox
                        checkedColor={colors.getColor().colorWhiteDark}
                        size={30}
                        checked={selectedCardId === item.id}
                        onPress={() => setSelectedCardId(item.id)}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={{height: "100%", width: "100%"}}>
            <SurbiHeader
                title={"Checkout"}
                isNavigationVisible={true}
                isCartVisible={false}
            />
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.addressTitle}>Select Address</Text>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <FontAwesome5 name={"plus-circle"} size={18} color={colors.getColor().colorPrimaryLight}/>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.addressListContainer}
                data={addresses}
                renderItem={renderAddress}
                keyExtractor={(item, index) => index.toString()}
            />
            <Text style={styles.addressTitle}>Select Credit Card</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.addressListContainer}
                data={myCreditCards}
                renderItem={renderCreditCards}
                keyExtractor={(item, index) => index.toString()}
            />
            <CartCheckout products={products}
                          buttonAction={() => handleSuccessfulPayment()}
                          buttonText={"PAY"}
            />
            <RBSheet
                ref={refRBSheet}
                height={300}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}>
                <AddAddress getAddresses={() => getMyAddresses()}
                            onDismiss={() => refRBSheet.current.close()}/>
            </RBSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    payButton: {
        alignItems: 'center',
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        width: "70%",
        alignSelf: "center",
        position: "absolute",
        bottom: 60
    },
    addressTitle: {
        padding: 15,
        fontSize: 18,
        fontWeight: "400"
    },
    addressContainer: {
        backgroundColor: colors.getColor().colorWhiteDark,
        height: 80,
        width: "95%",
        borderRadius: 10,
        alignSelf: "center",
        marginBottom: 10,
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    addressListContainer: {
        width: "100%",
        height: "30%",
        flexGrow: 0
    }
});

export default Checkout;