import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function MapCallout() {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <FontAwesome5 style={styles.icon} name={"coins"} size={25} color={"green"}/>
                <Text style={styles.text}>0.49$/min</Text>
            </View>
            <View style={styles.rowContainer}>
                <FontAwesome5 style={styles.icon} name={"battery-half"} size={25} color={"green"}/>
                <Text style={styles.text}>%23</Text>
            </View>
            <View style={styles.rowContainer}>
                <FontAwesome5 style={styles.icon} name={"map-marker-alt"} size={25} color={"green"}/>
                <Text style={styles.text}>150m</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15

    },
    text: {
        fontSize: 20,
        position: "absolute",
        right: 20
    },
    icon: {
        marginLeft: 10
    }

});

export default MapCallout;