import React, {useRef, useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import {COLORS} from "../constants/Colors";
import {userAddresses} from "../constants/MockData";
import {CheckBox} from 'react-native-elements'
import CartCheckout from "../components/CartCheckout";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import RBSheet from "react-native-raw-bottom-sheet";
import AddAddress from "../components/AddAddress";

function Checkout() {

    const navigation = useNavigation();
    const [selectedAddressId, setSelectedAddressId] = useState(null)
    const refRBSheet = useRef();

    function handleSuccessfulPayment() {
        navigation.navigate('Home');
        Alert.alert("Successful")
    }

    function renderAddress({item}) {
        return (
            <View style={styles.addressContainer}>
                <View style={styles.container}>
                    <Text>{item.title}</Text>
                    <CheckBox size={20}
                              checked={selectedAddressId === item.id}
                              onPress={() => setSelectedAddressId(item.id)}
                    />
                </View>
                <Text>{item.text}</Text>
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
                    <FontAwesome5 name={"plus-circle"} size={18}/>
                </TouchableOpacity>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.addressListContainer}
                horizontal={true}
                data={userAddresses}
                renderItem={renderAddress}
                keyExtractor={(item, index) => index.toString()}
            />
            <CartCheckout
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
                <AddAddress onPressDismiss={() => refRBSheet.current.close()}/>
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
        backgroundColor: COLORS.colorPrimaryLight,
        height: "20%",
        width: 200,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 5
    },
    addressListContainer: {
        width: "100%",
        alignSelf: "center",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 0,
        justifyContent: "space-evenly"
    }
});

export default Checkout;