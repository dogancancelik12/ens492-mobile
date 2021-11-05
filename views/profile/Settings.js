import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Avatar } from 'react-native-elements';
import SurbiHeader from "../../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import {COLORS} from "../../constants/Colors";

function Settings() {
    return (
        <View style={{alignItems: "center", height: "100%", width: "100%"}}>
            <SurbiHeader
                title={"Settings"}
                isNavigationVisible={true}/>
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Clear Cache</Text>
            </View>
        </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Change Language</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Change Theme</Text>
                </View>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 10,
        marginTop:15,
        marginBottom: 10,
        height: "7%",
        width: "100%",
        borderBottomWidth:1,
        borderTopWidth:1,
        borderTopColor:COLORS.colorPrimary,
        borderBottomColor:COLORS.colorPrimary
    },
    title: {
        marginLeft: 50,
        marginBottom:3,
        fontSize: 18,
        color: COLORS.colorPrimaryDark,
        fontWeight: "700",
        marginTop:14,
    },
});

export default Settings;