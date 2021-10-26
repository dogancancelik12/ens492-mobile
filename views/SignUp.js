import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

function SignUp() {

    const navigation = useNavigation();
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    return (
        <View style={styles.container}>
            <Image style={{width: "90%", height: "30%", resizeMode: "contain", marginTop: 30}}
                   source={require("../constants/surbiLogo.png")}/>
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
                <TextInput autoCorrect={false}
                           style={styles.textInput}
                           placeholder='Confirm Password' secureTextEntry={true}
                           onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}/>
            </View>
            <TouchableOpacity style={styles.button}
                              onPress={() => navigation.navigate('App')}>
                <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text style={{color: '#657cb1', marginTop: 20}}>Already have an account ?</Text>
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
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        width: 150,
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
export default SignUp;
