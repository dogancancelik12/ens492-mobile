import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function RenderSearchBar({searchedText}) {

    const [value, setValue] = useState('');

    useEffect(()=>{
        searchedText(value)
    },[value])

    return (
        <View style={styles.searchBar}>
            <TextInput
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder={`Search`}
                style={{marginLeft: 5,width:'80%'}}/>
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