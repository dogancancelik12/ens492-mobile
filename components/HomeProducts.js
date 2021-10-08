import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

function HomeProducts({title}) {
    return (
        <View>
            <Text style={{padding: 15, fontSize: 18}}>{title}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
                <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
                <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#e5e7ec",
        height: 100,
        alignItems: "center"
    },
    image: {
        height: "80%",
        width: "25%",
        resizeMode: "cover",
        borderRadius: 5
    }
});


export default HomeProducts;