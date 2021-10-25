import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Avatar,Icon } from 'react-native-elements';
import SurbiHeader from "../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


function Profile(information){
    const navigation = useNavigation();
return (
    <View style={styles.container_style}>
        <SurbiHeader
            title={"Profile"}
            isNavigationVisible={true}
            isCartVisible={false}
        />
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
            <Text style={{color: '#657cb1',marginTop:8,marginBottom:15}}>(539) 550 06 30</Text>
        </View>

        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Orders')}>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <FontAwesome5 name={"shopping-bag"} size={17} color={'white'}/>
            <Text style={{color: 'white',fontSize:15,marginLeft:5}}>My Orders</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Wallet')}>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <FontAwesome5 name={"wallet"} size={17} color={'white'}/>
                <Text style={{color: 'white',fontSize:15,marginLeft:5}}>My Wallet</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Addresses')}>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <FontAwesome5 name={"address-card"} size={17} color={'white'}/>
                <Text style={{color: 'white',fontSize:15,marginLeft:5}}>My Addresses</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Settings')}>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <FontAwesome5 name={"cog"} size={17} color={'white'}/>
                <Text style={{color: 'white',fontSize:15,marginLeft:5}}>Settings</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item_style}
                          onPress={() => navigation.navigate('Login')}>
            <View style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                <FontAwesome5 name={"sign-out-alt"} size={17} color={'white'}/>
                <Text style={{color: 'white',fontSize:15,marginLeft:5}}>Sign Out</Text>
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
    },
    avatar_style: {
        alignItems: 'center',
        marginTop:40,
    },
});

export default Profile;