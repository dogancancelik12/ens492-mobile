import React, {useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {colors} from "../constants/Colors";
import SurbiHeader from './SurbiHeader';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

function DistanceCalculator(props) {
    const {scooter} = props.route.params;
    const navigation = useNavigation();

    let places = [{
        name: 'Fery Building',
        distance: 5000
    }, {
        name: 'San Francisco Museum ',
        distance: 500
    }, {
        name: 'Ice Skating',
        distance: 2500
    }, {
        name: 'REI',
        distance: 8000
    }
    ]

    function renderItem({item}) {
        return (
            <TouchableOpacity disabled={true} style={{
                backgroundColor: 'white',
                padding: 16,
                borderBottomWidth: 2,
                borderBottomColor: 'gray'
            }}>
                <Text
                    style={{fontWeight: 'bold', fontSize: 18, color: colors.getColor().colorPrimary}}>{item.name}</Text>
                <View style={{flexDirection: 'row', marginTop: 6, alignItems: 'center'}}>
                    <FontAwesome5 size={18} name={'people-arrows'} color={colors.getColor().colorSecondary}/>
                    <Text style={{marginLeft: 8, marginTop: 5}}>{item.distance} m</Text>
                </View>
                <View>
                    <Progress.Bar color={colors.getColor().colorSecondary}
                                  progress={scooter.battery * 20 > item.distance ? 1 : (scooter.battery * 20 / item.distance)}
                                  width={200}/>
                    <Text style={{position: 'absolute', right: 158, top: -16}}>
                        {scooter.battery * 20 > item.distance ? 100 : (scooter.battery * 20 / item.distance) * 100}%100</Text>
                </View>
                {scooter.battery * 20 < item.distance &&
                <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
                    <FontAwesome5 color={'red'} name={'exclamation'}/>
                    <Text style={{marginLeft: 4}}>You can not reach there</Text>
                </View>}
            </TouchableOpacity>
        )
    }

    return <View style={styles.container}>
        <SurbiHeader title={"Distance Calculator"} isCartVisible={false} isNavigationVisible={true}/>
        <FlatList data={places} renderItem={renderItem}/>
        <TouchableOpacity style={{
            width: Dimensions.get('screen').width - 100,
            marginBottom: 20,
            height: 70,
            backgroundColor: colors.getColor().colorPrimary,
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 18,
            justifyContent: 'center'
        }} onPress={() => navigation.navigate('BarcodeScanner')}>
            <Text style={{color: 'white', fontSize: 20}}>Show Qr</Text>
        </TouchableOpacity>
    </View>
};

export default DistanceCalculator;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: "100%",
        width: "100%"
    },
})