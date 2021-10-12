import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {COLORS} from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";

function SurbiHeader({title, isCartVisible = true, isNavigationVisible = false}) {

    const navigation = useNavigation();

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
                {isNavigationVisible &&
                <TouchableOpacity
                    style={{position: "absolute", left: 20}}
                    onPress={() => navigation.goBack()}
                >
                    <FontAwesome5
                        name={"chevron-left"}
                        size={20}
                    />
                </TouchableOpacity>}
                <Text style={{fontSize: 24, color: "white"}}> {title} </Text>
                {isCartVisible &&
                <TouchableOpacity
                    style={{position: "absolute", right: 20}}
                    onPress={() => navigation.navigate("Cart")}
                >
                    <FontAwesome5
                        name={"shopping-cart"}
                        size={18}
                    />
                </TouchableOpacity>}
            </View>
        </View>
    );
}

export default SurbiHeader;