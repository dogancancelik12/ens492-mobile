import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {useNavigation} from '@react-navigation/native';
import {COLORS} from "../../constants/Colors";


function Login() {

    const navigation = useNavigation();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    return (
        <View style={styles.container}>
            <Image style={{width: "90%", height: "30%", resizeMode: "contain", marginTop: 30}}
                   source={require("../../constants/surbiLogo.png")}/>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center"}}>
                <TextInput
                    autoCorrect={false}
                    style={styles.textInput}
                    placeholder='E-mail'
                    onChangeText={(email) => setEmail(email)}/>
                <TextInput
                    autoCorrect={false}
                    style={styles.textInput}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}/>
            </View>
            <TouchableOpacity style={styles.button}
                              onPress={() => navigation.navigate('App')}>
                <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('SignUp')} style={{marginTop: 20, color: COLORS.colorPrimaryLight}}>
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
        backgroundColor: COLORS.colorPrimary,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
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

export default Login;
