import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function AddressItems({address}) {

    return (
        <View>
            <TouchableOpacity style={{height: 150}}>
                <View style={styles.container}>
                    <FontAwesome5 name={"home"}
                                  style={{marginRight: 15, left: 16, alignSelf: 'center'}}
                                  size={25}
                                  color={COLORS.colorPrimaryLight}
                    />
                    <View>
                        <Text style={styles.title}>{address.addressTitle}</Text>
                        <Text style={styles.address}>{address.addressDescription}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        height: "90%",
        width: "55%",
        flex: 1,
        marginLeft: 150,
    },
    address: {
        marginLeft: 20,
        fontSize: 15,
        color: 'grey',
        fontWeight: "700",
    },
    title: {
        marginLeft: 20,
        marginBottom: 3,
        fontSize: 15,
        color: 'black',
        fontWeight: "700",
    },
});

export default AddressItems;