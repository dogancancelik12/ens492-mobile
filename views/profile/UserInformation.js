import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SurbiHeader from "../../components/SurbiHeader";
import {COLORS} from "../../constants/Colors";

function UserInformation() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SurbiHeader title={"My Informations"}
                         isNavigationVisible={true}/>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center", marginTop: '40%'}}>
                <TextInput style={styles.editTextInput}
                           placeholderTextColor={'black'}
                           placeholder='Buse'/>
                <TextInput style={styles.editTextInput}
                           placeholderTextColor={'black'}
                           placeholder='Sumer'/>
                <TextInput editable={false} selectTextOnFocus={false}
                           style={styles.textInput} placeholder='buse-sumer@hotmail.com'/>
            </View>

            <TouchableOpacity style={styles.button}
                              onPress={() => navigation.navigate('ChangePassword')}>
                <FontAwesome5 name={"lock"} size={17} color={COLORS.colorPrimaryLight}/>
                <Text style={{color: COLORS.colorPrimaryLight, marginLeft: 5}}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton}
                              onPress={() => navigation.navigate('Profile')}>
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
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.colorPrimaryLight,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        marginTop: 20,
        width: '70%',
        height: 40,
        flexDirection: 'row',
        display: 'flex',
    },
    saveButton: {
        backgroundColor: COLORS.colorPrimaryLight,
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        width: '70%',
        height: 40,
        position: 'absolute',
        bottom: 0,
        marginBottom: 50,
    },
    editTextInput: {
        borderColor: COLORS.colorPrimary,
        borderWidth: 1,
        padding: 12,
        width: '90%',
        borderRadius: 16,
        marginTop: 20,
    },
    textInput: {
        borderColor: COLORS.colorPrimary,
        borderWidth: 1,
        padding: 12,
        width: '90%',
        borderRadius: 16,
        marginTop: 20
    }
});

export default UserInformation;