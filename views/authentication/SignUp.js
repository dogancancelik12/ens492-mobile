import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {COLORS} from "../../constants/Colors";
import {BarPasswordStrengthDisplay} from 'react-native-password-strength-meter';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import {restService} from '../../service/restService';

function SignUp() {

    const navigation = useNavigation();
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const signUp = () => {
        const sigUpData = {
            name: name,
            surname: surname,
            profilePhoto: '',
            phoneNumber: '00',
            password: password,
            email: email
        }
        restService.post('signUp', sigUpData)
            .then(response => {
                if (response.success) {
                    console.log('TOKEN', response.data)
                    SecureStore.setItemAsync('userToken', response.data).then(r => {
                        navigation.navigate('App')
                    })
                } else {
                    Alert.alert('Warning', response.message, [{
                        text: 'Login',
                        onPress: () => navigation.navigate('Login')
                    }])
                }
            })
    }

    return (
        <View style={styles.container}>
            <Image style={{width: "90%", height: "30%", resizeMode: "contain", marginTop: 30}}
                   source={require("../../constants/surbiLogo.png")}/>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center"}}>
                <TextInput autoCorrect={false}
                           style={styles.textInput}
                           placeholder='Name'
                           onChangeText={(name) => setName(name)}/>
                <TextInput autoCorrect={false}
                           style={styles.textInput}
                           placeholder='Surname'
                           onChangeText={(surname) => setSurname(surname)}/>
                <TextInput autoCorrect={false}
                           style={styles.textInput}
                           placeholder='E-mail'
                           onChangeText={(email) => setEmail(email)}/>
                <TextInput autoCorrect={false}
                           style={styles.textInput}
                           placeholder='Password'
                           secureTextEntry={true}
                           onChangeText={(password) => setPassword(password)}/>
                {password !== "" &&
                <BarPasswordStrengthDisplay minLength={1}
                                            width={Dimensions.get("screen").width * 0.85}
                                            password={password}/>
                }
                <TextInput autoCorrect={false}
                           style={styles.textInput}
                           placeholder='Confirm Password' secureTextEntry={true}
                           onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}/>
                {confirmPassword !== "" &&
                <BarPasswordStrengthDisplay minLength={1}
                                            width={Dimensions.get("screen").width * 0.85}
                                            password={confirmPassword}/>
                }
            </View>
            <TouchableOpacity style={styles.button}
                              onPress={() => signUp()}>
                <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text style={{color: COLORS.colorPrimaryLight, marginTop: 20}}>Already have an account ?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: COLORS.colorPrimary,
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        width: 150,
    },
    textInput: {
        borderColor: COLORS.colorPrimary,
        borderWidth: 1,
        padding: 12,
        width: '90%',
        borderRadius: 16,
        marginTop: 20
    }
});
export default SignUp;
