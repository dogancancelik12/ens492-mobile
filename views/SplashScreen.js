import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {COLORS} from "../constants/Colors";
import SurbiLoader from "../components/SurbiLoader";

function SplashScreen() {

    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false)
            navigation.navigate('Login')
        }, 2000)
    }, []);

    return (
        <View>
            <View style={styles.container}>
                <SurbiLoader isVisible={isVisible}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.colorPrimary,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default SplashScreen;