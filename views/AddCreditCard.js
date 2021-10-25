import React from 'react';
import {Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import SurbiHeader from "../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import {COLORS} from "../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


function AddCreditCard() {
    const navigation = useNavigation();

    function successAlert () {
        navigation.navigate('Wallet');
        Alert.alert('Successful')}

    return (
            <View style={styles.container}>
                <SurbiHeader isCartVisible={false} isNavigationVisible={true} title={'Add Card'}/>
                <View style={{flexDirection: 'row', display: 'flex'}}>
                    <FontAwesome5 style={{marginTop: 40,  marginRight: 20}}
                                  name={"cc-mastercard"} size={70} color='#657cb1'/>
                    <FontAwesome5 style={{marginTop: 40, marginRight: 20}}
                                  name={"cc-visa"} size={70} color='#657cb1'/>
                    <FontAwesome5 style={{marginTop: 40}}
                                  name={"cc-amex"} size={70} color='#657cb1'/>
                </View>
                <View style={{width: Dimensions.get("screen").width, alignItems: "center", marginTop: '15%'}}>
                    <TextInput style={styles.textInput} placeholder='Card Name'/>
                    <TextInput style={styles.textInput} placeholder='Card Number'/>
                    <TextInput style={styles.textInput} placeholder='Expire Date'/>
                    <TextInput style={styles.textInput} placeholder='CVC'/>
                </View>
                <TouchableOpacity style={styles.button}
                onPress={() => successAlert()}>
                    <Text style={{color: 'white', fontSize: 18}}>Add</Text>
                </TouchableOpacity>
            </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 50,
        marginTop: 20,
        width: 150,
        height: 40,
    },
    textInput: {
        borderColor: '#657cb1',
        borderWidth: 1,
        padding: 12,
        width: '90%',
        borderRadius: 16,
        marginTop: 20
    }
});
export default AddCreditCard;