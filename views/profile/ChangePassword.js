import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import SurbiHeader from "../../components/SurbiHeader";
import {COLORS} from "../../constants/Colors";
import {BarPasswordStrengthDisplay} from "react-native-password-strength-meter";

function ChangePassword() {

    const navigation = useNavigation();
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newConfirmPassword, setNewConfirmPassword] = useState("")


    return (
        <View style={styles.container}>
            <SurbiHeader title={"Change Password"}
                         isNavigationVisible={true}/>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center", marginTop: '40%'}}>
                <TextInput style={styles.textInput}
                           placeholder='Old Password'
                           onChangeText={(oldPassword) => setOldPassword(oldPassword)}/>
                <TextInput style={styles.textInput}
                           placeholder='New Password'
                           onChangeText={(newPassword) => setNewPassword(newPassword)}/>
                {newPassword !== "" &&
                <BarPasswordStrengthDisplay minLength={1}
                                            width={Dimensions.get("screen").width * 0.85}
                                            password={newPassword}/>
                }
                <TextInput style={styles.textInput}
                           placeholder='Confirm New Password'
                           onChangeText={(newConfirmPassword) => setNewConfirmPassword(newConfirmPassword)}/>
                {newConfirmPassword !== "" &&
                <BarPasswordStrengthDisplay minLength={1}
                                            width={Dimensions.get("screen").width * 0.85}
                                            password={newConfirmPassword}/>
                }
                <View style={styles.descriptionContainer}>
                    <Text style={styles.itemStyle}>* It must be at least 8 characters.</Text>
                    <Text style={styles.itemStyle}>* It must contain 1 uppercase letter, 1 lowercase letter, 1 symbol
                        and 1 number.</Text>
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
    textInput: {
        borderColor: COLORS.colorPrimary,
        borderWidth: 1,
        padding: 12,
        width: '90%',
        borderRadius: 16,
        marginTop: 20,
        alignItems: 'flex-start',
    },
    itemStyle: {
        padding: 6,
        marginLeft: 3,
        marginRight: 1,
        color: COLORS.colorPrimaryLight,
        fontSize: 13,
    },
    descriptionContainer: {
        alignItems: 'flex-start',
        marginTop: 45,
        borderBottomColor: COLORS.colorPrimary,
        borderBottomWidth: 1,
        borderTopColor: COLORS.colorPrimary,
        borderTopWidth: 1
    }
});


export default ChangePassword;