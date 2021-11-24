import {Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {useNavigation} from '@react-navigation/native';
import {colors} from "../../constants/Colors";
import {restService} from '../../service/restService';
import * as SecureStore from 'expo-secure-store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function Login() {

    const navigation = useNavigation();
    const [email, setEmail] = useState(null)
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState(null)

    const login = () => {
        if (emailError) {
            Alert.alert('Warning', 'This is not a valid email!')
            return
        }
        const loginData = {
            email: email,
            password: password
        }
        restService.post('login', loginData)
            .then(response => {
                if (response.success) {
                    console.log('TOKEN', response.data)
                    SecureStore.setItemAsync('userToken', response.data).then(r => {
                        navigation.navigate('App')
                    })
                } else {
                    if (response.errorKey === "noUser") {
                        Alert.alert('Warning', response.message, [
                            {
                                text: 'OK'
                            },
                            {
                                text: 'Sign Up',
                                onPress: () => navigation.navigate('SignUp')
                            }
                        ])
                    } else {
                        Alert.alert('Warning', response.message, [{
                            text: 'OK',
                        }])
                    }

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
                    <FontAwesome5 solid={true} style={{padding: 5}} name={'envelope'}/>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder='E-mail'
                        onChangeText={(email) => validateEmail(email)}/>
                </View>
                <View style={styles.viewIcon}>
                    <FontAwesome5 style={{padding: 5}} name={'lock'}/>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}/>
                </View>
            </View>
            <TouchableOpacity style={styles.button}
                              onPress={() => login()}>
                <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('SignUp')}
                  style={{marginTop: 20, color: colors.getColor().colorPrimaryLight}}>
                Don't have an account ?
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.getColor().colorPrimary,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
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

export default Login;
