import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useNavigation} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SurbiHeader from "../../components/SurbiHeader";
import {COLORS} from "../../constants/Colors";
import {restService} from "../../service/restService";


function Profile() {

    const navigation = useNavigation();
    const [user, setUser] = useState(null);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserInfo();
        });
        return unsubscribe;
    }, [])

    const getUserInfo = () => {
        restService.get('user/getUserInfo')
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            })
    }

    return (
        <View style={styles.containerStyle}>
            <SurbiHeader title={"Profile"}
                         isNavigationVisible={false}/>
            <ScrollView style={{height: "90%"}}>
                {user &&
                <View style={styles.avatarStyle}>
                    <Avatar containerStyle={{backgroundColor: COLORS.colorSecondary}}
                            size="large"
                            title={user.name[0] + user.surname[0]}
                            rounded
                    />
                    <Text style={{color: COLORS.colorPrimary, marginTop: 10, fontSize: 16}}>{user.name} {user.surname}</Text>
                    <Text style={{color: COLORS.colorPrimary, marginTop: 5, fontSize: 16}}>{user.email}</Text>
                    <Text style={{color: COLORS.colorPrimary, marginTop: 8, fontSize: 16}}>{user.phoneNumber}</Text>
                </View>
                }
                <TouchableOpacity style={styles.itemStyle}
                                  onPress={() => navigation.navigate('UserInformation', {user: user})}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                        <FontAwesome5 name={"user-alt"} size={17} color={'white'}/>
                        <Text style={{color: 'white', fontSize: 15, marginLeft: 5}}>My Information</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemStyle}
                                  onPress={() => navigation.navigate('Orders')}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                        <FontAwesome5 name={"shopping-bag"} size={17} color={'white'}/>
                        <Text style={{color: 'white', fontSize: 15, marginLeft: 5}}>My Orders</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemStyle}
                                  onPress={() => navigation.navigate('Wallet')}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                        <FontAwesome5 name={"wallet"} size={17} color={'white'}/>
                        <Text style={{color: 'white', fontSize: 15, marginLeft: 5}}>My Wallet</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemStyle}
                                  onPress={() => navigation.navigate('Addresses')}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                        <FontAwesome5 name={"address-card"} size={17} color={'white'}/>
                        <Text style={{color: 'white', fontSize: 15, marginLeft: 5}}>My Addresses</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemStyle}
                                  onPress={() => navigation.navigate('Settings')}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                        <FontAwesome5 name={"cog"} size={17} color={'white'}/>
                        <Text style={{color: 'white', fontSize: 15, marginLeft: 5}}>Settings</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemStyle}
                                  onPress={() => navigation.navigate('Login')}>
                    <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                        <FontAwesome5 name={"sign-out-alt"} size={17} color={'white'}/>
                        <Text style={{color: 'white', fontSize: 15, marginLeft: 5}}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    itemStyle: {
        backgroundColor: COLORS.colorPrimary,
        padding: 20,
        marginVertical: 9,
        marginHorizontal: 16,
        color: "white",
        fontSize: 17,
        borderRadius: 50,
    },
    containerStyle: {
        marginBottom: 10,
    },
    avatarStyle: {
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 20,
    },
});

export default Profile;