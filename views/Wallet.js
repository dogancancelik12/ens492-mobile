import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Avatar } from 'react-native-elements';
import SurbiHeader from "../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";

function Wallet() {
    return (
        <View style={styles.container_style}>
            <Text style={{color: '#657cb1', marginTop:10}}>My Wallet</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container_style: {
        marginBottom:10,
        marginTop:100,
    },
});

export default Wallet;