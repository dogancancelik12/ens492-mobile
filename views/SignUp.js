import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

function SignUp() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={{width: Dimensions.get("screen").width, alignItems:"center", marginTop: '30%'}} >
                <TextInput style={{borderColor: '#657cb1',borderWidth: 1, padding: 12, width: '90%', borderRadius: 16,}}
                           placeholder='Name'/>
                <TextInput style={{borderColor: '#657cb1',borderWidth: 1, padding: 12, width: '90%', borderRadius: 16, marginTop: 20}}
                           placeholder='Surname'/>
                <TextInput style={{borderColor: '#657cb1',borderWidth: 1, padding: 12, width: '90%', borderRadius: 16, marginTop:20}}
                           placeholder='E-mail'/>
                <TextInput style={{borderColor: '#657cb1',borderWidth: 1, padding: 12, width: '90%', borderRadius: 16, marginTop: 20}}
                           placeholder='Password'/>
                <TextInput style={{borderColor: '#657cb1',borderWidth: 1, padding: 12, width: '90%', borderRadius: 16, marginTop: 20}}
                           placeholder='Confirm Password'/>
            </View>
            <TouchableOpacity style={styles.textInput}
                              onPress={() => navigation.navigate('App')}>
                <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                              onPress={() => navigation.navigate('Login')}>
                <Text style={{color: '#657cb1',marginTop: 40 }}>Already have an account ?</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        //justifyContent: 'center',
       // marginTop: 200,
    },
    textInput: {
        alignItems: 'center',
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 10,
        marginTop: 40,
        width: 100,
    }

   // background: {
    //}
});
export default SignUp;