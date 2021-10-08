import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function RenderSearchBar() {
    return (
        <View style={styles.searchBar}>
            <TextInput
                placeholder={`Search`}
                style={{marginLeft: 5}}/>
            <FontAwesome5 style={{alignSelf: "center", right: 10}} name={"search"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        width: "80%",
        backgroundColor: "#e7e7ea",
        alignSelf: "center",
        borderRadius: 5,
        height: 30,
        justifyContent: "space-between",
        marginTop: 10,
        flexDirection: "row",
    }
});

export default RenderSearchBar;