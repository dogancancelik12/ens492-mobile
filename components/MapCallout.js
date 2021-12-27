import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {colors} from "../constants/Colors";

function MapCallout({scooter}) {

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <FontAwesome5 style={styles.icon}
                              name={"coins"} size={25}
                              color={colors.getColor().colorSecondary}/>
                <Text style={styles.description}>Price</Text>
                <Text style={styles.text}>{scooter.pricePerMin}TL/min</Text>
            </View>
            <View style={styles.rowContainer}>
                <FontAwesome5 style={styles.icon}
                              name={"battery-half"} size={25}
                              color={colors.getColor().colorSecondary}/>
                <Text style={styles.description}>Battery</Text>
                <Text style={styles.text}>{scooter.battery}%</Text>
            </View>
            <View style={styles.rowContainer}>
                <FontAwesome5 style={styles.icon}
                              name={"map-marker-alt"} size={25}
                              color={colors.getColor().colorSecondary}/>
                <Text style={styles.description}>Distance</Text>
                <Text style={styles.text}>{scooter.remainingDistance}m</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color: colors.getColor().colorWhite}}>
                    START TO RIDE
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.getColor().colorWhite,
        borderRadius: 10,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
    },
    text: {
        fontSize: 18,
        position: "absolute",
        right: 20
    },
    icon: {
        marginLeft: 20,
        marginTop: 5
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.getColor().colorSecondary,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        width: "70%",
        alignSelf: "center"
    },
    description: {
        color: colors.getColor().colorGrey,
        position: "absolute",
        left: 60
    }
});

export default MapCallout;