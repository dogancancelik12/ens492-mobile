import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

function SignUp() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center", marginTop: '30%'}}>
                <TextInput style={styles.textInput} placeholder='Name'/>
                <TextInput style={styles.textInput} placeholder='Surname'/>
                <TextInput style={styles.textInput} placeholder='E-mail'/>
                <TextInput style={styles.textInput} placeholder='Password'/>
                <TextInput style={styles.textInput} placeholder='Confirm Password'/>
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