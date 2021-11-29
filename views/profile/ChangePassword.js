import React, {useState} from 'react';
import {Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import SurbiHeader from "../../components/SurbiHeader";
import {colors} from "../../constants/Colors";
import {BarPasswordStrengthDisplay} from "react-native-password-strength-meter";
import {restService} from "../../service/restService";

function ChangePassword() {

    const navigation = useNavigation();
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const newPasswordInfo = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword
    }

    const changePassword = () => {
        restService.post('user/changeUserPassword', newPasswordInfo)
            .then(response => {
                    if (response.success) {
                        Alert.alert(response.message)
                        navigation.navigate('Profile')
                    } else {
                        Alert.alert(response.message)
                    }
                }
            )
    }

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
                           onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}/>
                {confirmPassword !== "" &&
                <BarPasswordStrengthDisplay minLength={1}
                                            width={Dimensions.get("screen").width * 0.85}
                                            password={confirmPassword}/>
                }
                <View style={styles.descriptionContainer}>
                    <Text style={styles.itemStyle}>* We suggest it to be at least 8 characters.</Text>
                    <Text style={styles.itemStyle}>* We suggest it to contain 1 uppercase letter, 1 lowercase letter, 1 symbol
                        and 1 number.</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.saveButton}
                              onPress={() => changePassword()}>
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
        backgroundColor: colors.getColor().colorPrimaryLight,
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
        borderColor: colors.getColor().colorPrimary,
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
        color: colors.getColor().colorPrimaryLight,
        fontSize: 13,
    },
    descriptionContainer: {
        alignItems: 'flex-start',
        marginTop: 45,
        borderBottomColor: colors.getColor().colorPrimary,
        borderBottomWidth: 1,
        borderTopColor: colors.getColor().colorPrimary,
        borderTopWidth: 1
    }
});


export default ChangePassword;