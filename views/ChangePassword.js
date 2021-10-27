import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import SurbiHeader from "../components/SurbiHeader";
import PassMeter from "react-native-passmeter";

const MAX_LEN = 15,
    MIN_LEN = 8,
    PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

function ChangePassword() {
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SurbiHeader title={"Change Password"}
                         isNavigationVisible={true}/>
            <View style={{width: Dimensions.get("screen").width, alignItems: "center", marginTop: '40%'}}>
                <TextInput style={styles.textInput}
                           secureTextEntry={true}
                           placeholder='Old Password'/>
                <TextInput style={styles.textInput}
                           onChangeText={pass => setPassword(pass)}
                           secureTextEntry={true}
                           placeholder='New Password'/>

                <PassMeter
                    showLabels
                    password={password}
                    maxLength={MAX_LEN}
                    minLength={MIN_LEN}
                    labels={PASS_LABELS}
                />

                <TextInput style={styles.textInput}
                           secureTextEntry={true}
                           placeholder='New Password Again'/>

                <View style={{
                    alignItems: 'flex-start', marginTop: 45, borderBottomColor: '#657cb1',
                    borderBottomWidth: 1, borderTopColor: '#657cb1', borderTopWidth: 1
                }}>
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
        backgroundColor: '#657cb1',
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        width: '70%',
        height: 40,
        position: 'absolute',
        bottom: 0,
        marginBottom: 50,
    },
    textInput: {
        borderColor: '#657cb1',
        borderWidth: 1,
        padding: 12,
        width: '90%',
        borderRadius: 16,
        marginTop: 20,
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    itemStyle: {
        padding: 6,
        marginLeft: 3,
        marginRight: 1,
        color: '#657cb1',
        fontSize: 13,
    },
});


export default ChangePassword;