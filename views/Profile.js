import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Avatar } from 'react-native-elements';
import SurbiHeader from "../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";


function Profile(information){
    const navigation = useNavigation();
return (
    <View style={styles.container_style}>
        <View style={styles.avatar_style}>
        <Avatar
            size="large"
            title='BS'
            rounded
            source={{
                uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
        />
            <Text style={{color: '#657cb1', marginTop:10}}>Buse Sumer</Text>
            <Text style={{color: '#657cb1',marginTop:5}}>buse-sumer@hotmail.com</Text>
            <Text style={{color: '#657cb1',marginTop:8}}>(539) 550 06 30</Text>
        </View>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Orders')}>
            <Text style={{color: 'white'}}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Wallet')}>
            <Text style={{color: 'white'}}>My Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Adresses')}>
            <Text style={{color: 'white'}}>My Adresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Settings')}>
            <Text style={{color: 'white'}}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'white'}}>Sign Out</Text>
        </TouchableOpacity>
    </View>
);
}


const styles = StyleSheet.create({
    item_style: {
        backgroundColor: '#657cb1',
        padding: 20,
        marginVertical: 9,
        marginHorizontal: 16,
        color: "white",
        fontSize: 17,
        borderRadius:50,
    },
    container_style: {
        marginBottom:10,
        marginTop:100,
    },
    avatar_style: {
        alignItems: 'center',
        marginBottom:60,
    },
});

export default Profile;