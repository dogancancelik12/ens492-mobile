import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function SurbiHeader({title}) {
    return (
        <View style={{width: "100%", backgroundColor: "#a3aac4", height: 80}}>
            <View style={{
                flexDirection: "row",
                display: "flex",
                marginTop: 40,
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{fontSize: 24, color: "white"}}> {title} </Text>
                <FontAwesome5 name={"shopping-cart"} size={18} style={{position: "absolute", right: 15}}/>
            </View>
        </View>
    );
}

export default SurbiHeader;