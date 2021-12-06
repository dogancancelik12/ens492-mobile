import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {colors} from "../../constants/Colors";
import {BarPasswordStrengthDisplay} from 'react-native-password-strength-meter';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import {restService} from '../../service/restService';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function SignUp() {

    const navigation = useNavigation();
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [email, setEmail] = useState(null)
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorIsVisible, setErrorIsVisible] = useState(false)

    useEffect(() => {
        if (confirmPassword.length > 2) {
            for (let i = 0; i < password.length; i++) {
                if (confirmPassword.length > password.length) {
                    setErrorIsVisible(true);
                } else {
                    if (password[i] !== confirmPassword[i]) {
                        setErrorIsVisible(true);
                    } else {
                        setErrorIsVisible(false)
                    }
                }
            }
        } else {
            setErrorIsVisible(false)
        }
    }, [password, confirmPassword])

    const signUp = () => {
        if (!name || !surname || !password) {
            Alert.alert('Warning', 'Missing information!')
            return
        }
        if (emailError) {
            Alert.alert('Warning', 'This is not a valid email!')
            return
        }
        if (errorIsVisible) {
            Alert.alert('Warning', 'Passwords did not match!')
            return
        }
        if (password && password.length < 5) {
            Alert.alert('Warning', 'Your password must be at least 6 characters!')
            return
        }
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

    const validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setEmail(text)
            setEmailError(true)
        } else {
            setEmail(text)
            setEmailError(false)
        }
    }

    return (
        <View style={styles.container}>
            <Image style={{width: "90%", height: "30%", resizeMode: "contain", marginTop: 30}}
                   source={require("../../constants/surbiLogo.png")}/>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center"}}>
                <View style={styles.viewIcon}>
                    <FontAwesome5 solid={true} style={{padding: 5}} name={'user'}/>
                    <TextInput autoCorrect={false}
                               style={styles.textInput}
                               placeholder='Name'
                               onChangeText={(name) => setName(name)}/>
                </View>
                <View style={styles.viewIcon}>
                    <FontAwesome5 solid={true} style={{padding: 5}} name={'user'}/>
                    <TextInput autoCorrect={false}
                               style={styles.textInput}
                               placeholder='Surname'
                               onChangeText={(surname) => setSurname(surname)}/>
                </View>
                <View style={styles.viewIcon}>
                    <FontAwesome5 solid={true} style={{padding: 5}} name={'envelope'}/>
                    <TextInput autoCorrect={false}
                               style={styles.textInput}
                               placeholder='E-mail'
                               autoCapitalize={'none'}
                               onChangeText={(email) => validateEmail(email)}/>
                </View>
                <View style={styles.viewIcon}>
                    <FontAwesome5 style={{padding: 5}} name={'lock'}/>
                    <TextInput autoCorrect={false}
                               style={styles.textInput}
                               placeholder='Password'
                               secureTextEntry={true}
                               autoCapitalize={'none'}
                               onChangeText={(password) => setPassword(password)}/>
                </View>
                {password !== "" &&
                <BarPasswordStrengthDisplay minLength={1}
                                            width={Dimensions.get("screen").width * 0.85}
                                            password={password}/>
                }
                <View style={styles.viewIcon}>
                    <FontAwesome5 style={{padding: 5}} name={'lock'}/>
                    <TextInput autoCorrect={false}
                               autoCapitalize={'none'}
                               style={styles.textInput}
                               placeholder='Confirm Password' secureTextEntry={true}
                               onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}/>
                </View>
                {errorIsVisible &&
                <View style={{
                    flexDirection: 'row',
                    display: 'flex',
                    marginTop: 5,
                    width: Dimensions.get("screen").width * 0.85
                }}>
                    <FontAwesome5 color={'red'} style={{padding: 2}} name={'exclamation'}/>
                    <Text style={{color: 'red'}}>Passwords didn't match. Try again!</Text>
                </View>
                }
            </View>
            <TouchableOpacity style={styles.button}
                              onPress={() => signUp()}>
                <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text style={{color: colors.getColor().colorPrimaryLight, marginTop: 20}}>Already have an account
                    ?</Text>
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
        backgroundColor: colors.getColor().colorPrimary,
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        width: 150,
    },
    textInput: {
        padding: 5,
        width: '90%',
    },
    viewIcon: {
        borderRadius: 16,
        borderColor: colors.getColor().colorPrimary,
        borderWidth: 1,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        marginTop: 20
    }
});
export default SignUp;
