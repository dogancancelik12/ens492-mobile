import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import SurbiHeader from "../components/SurbiHeader";

function SplashScreen() {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 2000)
    }, []);

    return (
        <View>
            <SurbiHeader isCartVisible={false}/>
            <Text> SplashScreen </Text>
        </View>
    );
}

export default SplashScreen;