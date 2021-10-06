import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <TextInput style={{borderWidth: 1, padding: 10, width: '90%', borderRadius: 10}}
                       placeholder='E-mail'/>
            <TextInput style={{borderWidth: 1, padding: 10, width: '90%', borderRadius: 10, marginTop: 20}}
                       placeholder='Password'/>
            <TouchableOpacity style={{
                alignItems: 'center',
                backgroundColor: '#657cb1',
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
                width: 100
            }}>
                <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                alignItems: 'center',
                backgroundColor: '#657cb1',
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
                width: 100
            }}>
                <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
