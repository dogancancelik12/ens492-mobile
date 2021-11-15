import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import AddressItems from "../../components/AddressItems";
import AddAddress from "../../components/AddAddress";
import RBSheet from "react-native-raw-bottom-sheet";
import {COLORS} from "../../constants/Colors";
import {restService} from "../../service/restService";

function Adresses() {

    const refRBSheet = useRef();
    const [addresses, setAddresses] = useState(null)

    useEffect(() => {
        getMyAddresses();
    }, [])

    const getMyAddresses = () => {
        restService.get('addresses/getMyAddresses')
            .then(response => {
                console.log(response.data)
                setAddresses(response.data);
            })
    }

    const addressList = () => addresses.map(address =>
        <AddressItems key={address.id} address={address}/>
    )

    return (
        <View style={{alignItems: "center", height: "100%", width: "100%"}}>
            <SurbiHeader
                title={"My Addresses"}
                isNavigationVisible={true}
                isCartVisible={false}
            />
            <ScrollView style={styles.scrollView}>
                {addresses && addressList()}
            </ScrollView>
            <TouchableOpacity style={styles.button}
                              onPress={() => refRBSheet.current.open()}>
                <Text style={{color: 'white', fontSize: 18}}>ADD ADDRESS</Text>
            </TouchableOpacity>
            <RBSheet
                closeOnDragDown={true}
                ref={refRBSheet}
                height={300}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}>
                <AddAddress getAddresses={() => getMyAddresses()} onDismiss={() => refRBSheet.current.close()}/>
            </RBSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        height: "50%",
        width: "170%",
    },
    button: {
        alignItems: 'center',
        backgroundColor: COLORS.colorPrimaryLight,
        padding: 10,
        borderRadius: 50,
        marginBottom: 40,
        width: "70%",
        height: 40,
    },
});

export default Adresses;