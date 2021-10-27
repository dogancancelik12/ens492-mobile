import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Login() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center", marginTop: '40%'}}>

                <TextInput style={styles.textInput}
                           placeholder='E-mail'/>
                <TextInput style={styles.textInput}
                           placeholder='Password'/>
            </View>
            <TouchableOpacity style={styles.button}
                              onPress={() => navigation.navigate('App')}>
                <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
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
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
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

export default Login;
