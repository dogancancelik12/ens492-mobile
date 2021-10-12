import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native';


function Login() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center", marginTop: '40%'}}>
                <TextInput style={{borderWidth: 1, padding: 10, width: '90%', borderRadius: 10}}
                           placeholder='E-mail'/>
                <TextInput style={{borderWidth: 1, padding: 10, width: '90%', borderRadius: 10, marginTop: 20}}
                           placeholder='Password'/>
            </View>
            <TouchableOpacity style={styles.textInput}
                              onPress={() => navigation.navigate('App')}>
                <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textInput}
                              onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    textInput: {
        alignItems: 'center',
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: 100,
    }
});

export default Login;

