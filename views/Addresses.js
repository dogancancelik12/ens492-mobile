import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {adresses} from "../constants/MockData";
import {useNavigation} from "@react-navigation/native";
import SurbiHeader from "../components/SurbiHeader";
import AddressItems from "../components/AddressItems";

function Adresses() {

    const navigation = useNavigation();

    const addressList = adresses.map(address =>
        <AddressItems key={address.id} item={address}/>
    )

    return (
        <View style={{alignItems: "center", height: "100%", width: "100%"}}>
            <SurbiHeader
                title={"My Addresses"}
                isNavigationVisible={true}
                isCartVisible={false}
            />
            <ScrollView style={styles.scrollView}>
                {addressList}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        height: "50%",
        width: "170%",
    },
});

export default Adresses;