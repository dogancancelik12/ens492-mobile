import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";

function HomeProducts({title}) {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{fontSize: 18, marginLeft: 15, marginBottom: 15, marginTop: 10}}>{title}</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.imageContainer}
                                  onPress={() => {
                                      navigation.navigate("ProductDetail",{
                                          productName: title.title
                                      });
                                  }}>
                    <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer}
                                  onPress={() => {
                                      navigation.navigate("ProductDetail",{
                                          productName: title.title
                                      });
                                  }}>
                    <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer}
                                  onPress={() => {
                                      navigation.navigate("ProductDetail",{
                                          productName: title.title
                                      });
                                  }}>
                    <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: COLORS.colorWhiteDark,
        height: 100,
        alignItems: "center"
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 5
    },
    imageContainer: {
        height: "80%",
        width: "25%"
    }
});


export default HomeProducts;