import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {COLORS} from "../constants/Colors";

function SplashScreen() {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 2000)
    }, []);

    return (
        <View>
            <View style={styles.container}>
                <Text> Sürbi </Text>
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