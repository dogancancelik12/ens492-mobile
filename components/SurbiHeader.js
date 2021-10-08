import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {COLORS} from "../constants/Colors";

function SurbiHeader({title, isCartVisible = true}) {
    return (
        <View style={{width: "100%", backgroundColor: COLORS.colorPrimary, height: 80}}>
            <View style={{
                flexDirection: "row",
                display: "flex",
                marginTop: 40,
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{fontSize: 24, color: "white"}}> {title} </Text>
                {isCartVisible &&
                <FontAwesome5 name={"shopping-cart"} size={18} style={{position: "absolute", right: 20}}/>}
            </View>
        </View>
    );
}

export default SurbiHeader;