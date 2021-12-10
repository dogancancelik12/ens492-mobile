import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {restService} from "../service/restService";
import SurbiPopUp from "./SurbiPopUp";

function AddressItems({address, getAddresses}) {

    const [isPopUpVisible, setIsPopUpVisible] = useState(false)

    const deleteAddress = (addressId) => {
        restService.post(`addresses/deleteAddress/${addressId}`)
            .then(response => {
                if (response.success) {
                    Alert.alert(response.message)
                    getAddresses()
                } else {
                    Alert.alert(response.message)
                }
            })
    }

    return (
        <View>
            <TouchableOpacity style={{height: 150}}>
                <View style={styles.container}>
                    <FontAwesome5 name={"home"}
                                  style={{marginRight: 15, left: 16, alignSelf: 'center'}}
                                  size={25}
                                  color={colors.getColor().colorPrimaryLight}
                    />
                    <View>
                        <Text style={styles.title}>{address.addressTitle}</Text>
                        <Text style={styles.address}>{address.addressDescription}</Text>
                    </View>
                    <FontAwesome5 style={styles.icon} name={"times-circle"}
                                  size={18}
                                  color={colors.getColor().colorPrimaryLight}
                                  onPress={() => setIsPopUpVisible(true)}

                    />
                </View>
            </TouchableOpacity>
            {isPopUpVisible &&
            <SurbiPopUp title={"Are you sure ?"}
                        positiveButtonText={"Yes"}
                        negativeButtonText={"Cancel"}
                        positiveButtonAction={() => deleteAddress(address.id)}
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
        height: "90%",
        width: "55%",
        flex: 1,
        marginLeft: 150,
    },
    address: {
        marginLeft: 20,
        fontSize: 15,
        color: 'grey',
        fontWeight: "700",
    },
    title: {
        marginLeft: 20,
        marginBottom: 3,
        fontSize: 15,
        color: 'black',
        fontWeight: "700",
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 10
    }
});

export default AddressItems;