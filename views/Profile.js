import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Avatar,Icon } from 'react-native-elements';
import SurbiHeader from "../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


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
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
            <Icon name='shopping-bag'
                  color='white'
            style={{marginRight:5}}/>
            <Text style={{color: 'white',fontSize:15}}>My Orders</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Wallet')}>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <Icon name='account-balance-wallet'
                      color='white'
                      style={{marginRight:5}}/>
                <Text style={{color: 'white',fontSize:15}}>My Wallet</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Addresses')}>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <Icon name='list'
                      color='white'
                      style={{marginRight:5}}/>
                <Text style={{color: 'white',fontSize:15}}>My Addresses</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Settings')}>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <Icon name='settings'
                      color='white'
                      style={{marginRight:5}}/>
                <Text style={{color: 'white',fontSize:15}}>Settings</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Login')}>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <Icon name='logout'
                      color='white'
                      style={{marginRight:5}}/>
                <Text style={{color: 'white',fontSize:15}}>Sign Out</Text>
            </View>
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