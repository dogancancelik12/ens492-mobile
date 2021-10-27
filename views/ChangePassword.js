import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import SurbiHeader from "../components/SurbiHeader";

function ChangePassword(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <SurbiHeader title={"Change Password"}
                         isNavigationVisible={true}/>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center", marginTop: '40%'}}>
                <TextInput style={styles.textInput}
                           placeholder='Old Password'/>
                <TextInput style={styles.textInput} placeholder='New Password'/>
                <TextInput style={styles.textInput} placeholder='New Password Again'/>
                <View style={{alignItems:'flex-start', marginTop:45,  borderBottomColor:'#657cb1',
                    borderBottomWidth:1,borderTopColor:'#657cb1',borderTopWidth:1}}>
                <Text style={styles.itemStyle}>* It must be at least 8 characters.</Text>
                <Text style={styles.itemStyle}>* It must contain 1 uppercase letter, 1 lowercase letter, 1 symbol and 1 number.</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.saveButton}
                              onPress={() => navigation.navigate('UserInformation')}>
                <Text style={{color: 'white'}}>SAVE</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor:'#657cb1',
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        width: '70%',
        height:40,
        position: 'absolute',
        bottom:0,
        marginBottom:50,
    },
    textInput: {
        borderColor: '#657cb1',
        borderWidth: 1,
        padding: 12,
        width: '90%',
        borderRadius: 16,
        marginTop: 20,
        alignItems:'flex-start',
    },
    itemStyle: {
        padding:6,
        marginLeft:3,
        marginRight:1,
        color:'#657cb1',
        fontSize: 13,
    },
});


export default ChangePassword;