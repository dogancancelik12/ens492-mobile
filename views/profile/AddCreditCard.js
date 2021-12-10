import React, {useState} from 'react';
import {Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import SurbiHeader from "../../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {colors} from "../../constants/Colors";
import {restService} from "../../service/restService";


function AddCreditCard() {
    const navigation = useNavigation();

    const [cardTitle, setCardTitle] = useState(undefined)
    const [cardNumber, setCardNumber] = useState(undefined)
    const [expireDate, setExpireDate] = useState(undefined)


    const addCard = () => {
        const cardBody = {
            cardTitle: cardTitle,
            cardNumber: cardNumber,
            expireDate: Date.now()
        }
        if (cardTitle && cardNumber) {
            restService.post("/creditCard/addCreditCard", cardBody)
                .then((response) => {
                    if (response.success) {
                        Alert.alert(response.message)
                        navigation.navigate('Wallet');
                    } else {
                        Alert.alert(response.message)
                    }
                })
        } else {
            Alert.alert("Please fill all the fields")
        }
    }

    return (
        <View style={styles.container}>
            <SurbiHeader isCartVisible={false} isNavigationVisible={true} title={'Add Card'}/>
            <View style={{flexDirection: 'row', display: 'flex'}}>
                <FontAwesome5 style={{marginTop: 40, marginRight: 20}}
                              name={"cc-mastercard"}
                              size={70}
                              color={colors.getColor().colorPrimary}/>
                <FontAwesome5 style={{marginTop: 40, marginRight: 20}}
                              name={"cc-visa"}
                              size={70}
                              color={colors.getColor().colorPrimary}/>
                <FontAwesome5 style={{marginTop: 40}}
                              name={"cc-amex"}
                              size={70}
                              color={colors.getColor().colorPrimary}/>
            </View>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center", marginTop: 30}}>
                <TextInput style={styles.textInput}
                           placeholder='Card Title'
                           onChangeText={(cardTitle) => setCardTitle(cardTitle)}/>
                <TextInput style={styles.textInput}
                           placeholder='Card Number'
                           onChangeText={(cardNumber) => setCardNumber(cardNumber)}/>
                <TextInput style={styles.textInput}
                           placeholder='Expire Date' onChangeText={(expireDate) => setExpireDate(expireDate)}/>
            </View>
            <TouchableOpacity style={styles.button}
                              onPress={() => addCard()}>
                <Text style={{color: 'white', fontSize: 18}}>ADD</Text>
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
        backgroundColor: colors.getColor().colorPrimaryLight,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: 120,
        height: 40,
    },
    textInput: {
        borderColor: colors.getColor().colorPrimaryLight,
        borderWidth: 1,
        padding: 12,
        width: '90%',
        borderRadius: 12,
        marginTop: 20
    }
});
export default AddCreditCard;