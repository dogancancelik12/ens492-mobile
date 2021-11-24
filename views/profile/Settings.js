import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Modal, Switch, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import SurbiPopUp from '../../components/SurbiPopUp';
import {useNavigation} from '@react-navigation/native';
import {restService} from '../../service/restService';
import {colors} from '../../constants/Colors';

function Settings() {

    const [visible, setVisible] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const [showIndicator, setShowIndicator] = useState(false)
    const navigation = useNavigation();

    useEffect(() => {
        getUserInfo();
    }, [])

    const getUserInfo = () => {
        restService.get('user/getUserInfo')
            .then(response => {
                setIsDark(response.data.isDarkModeEnabled);
            })
    }

    const changeUserColor = () => {
        setShowIndicator(true)
        setIsDark(!isDark)
        restService.get('user/changeUserColor')
            .then(response => {
                console.log('DARK MODE:', response.data.isDarkModeEnabled)
                colors.getUserInfo()
            })
        setTimeout(() => {
            setShowIndicator(false)
            navigation.goBack();
        }, 2500)
    }


    return <View>
        <SurbiHeader title={"Settings"} isCartVisible={false} isNavigationVisible={true}/>
        <View style={{
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
            backgroundColor: 'white',
            borderBottomWidth: 0.6
        }}>
            <Text style={{fontSize: 20, padding: 10}}>Application Theme(Light/Dark)</Text>
            <Switch trackColor={{false: "#767577", true: colors.getColor().colorPrimary}} value={isDark}
                //thumbColor={isDark ? "red" : "#f4f3f4"}
                    onValueChange={() => changeUserColor()}/>
        </View>
        <TouchableOpacity style={{
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
            backgroundColor: 'white',
            borderBottomWidth: 0.6
        }}>
            <Text style={{fontSize: 20, padding: 10}}>Clear Cache</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisible(true)}
                          style={{
                              flexDirection: 'row',
                              padding: 20,
                              alignItems: 'center',
                              backgroundColor: 'white'
                          }}>
            <Text style={{fontSize: 20, padding: 10}}>Sign Out</Text>
        </TouchableOpacity>
        {visible &&
        <SurbiPopUp positiveButtonAction={() => navigation.navigate('Login')}
                    positiveButtonText={'Yes'}
                    negativeButtonText={'No'}
                    negativeButtonAction={() => setVisible(false)}
                    title={'Are you sure :( '}/>
        }
        <ActivityIndicator animating={showIndicator} style={{marginTop: 40}} color={colors.getColor().colorPrimary}
                           size='large'/>
    </View>
}

export default Settings;