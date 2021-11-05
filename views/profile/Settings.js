import React from 'react';
import {View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";


function Settings() {
    return (
        <View>
            <SurbiHeader title={"Settings"} isCartVisible={false} isNavigationVisible={true}/>

        </View>
    );
}

export default Settings;