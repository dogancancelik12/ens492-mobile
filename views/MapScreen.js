import React, {useEffect, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location'
import SurbiLoader from "../components/SurbiLoader";
import {scootersLocation} from "../constants/MockData";
import MapCallout from "../components/MapCallout";
import {Dimensions} from "react-native";
import {useNavigation} from "@react-navigation/native";


function Map() {

    const navigation = useNavigation();
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    useEffect(() => {
        getCurrentLocation({enableHighAccuracy: true})
    }, []);

    async function getCurrentLocation() {
        //let { status } = await Location.requestForegroundPermissionsAsync();  izin problemi yaşanırsa bu kod izin istiyor, 1 kere runlamak yeterli
        const currentLocation = await Location.getCurrentPositionAsync({})
        setLatitude(currentLocation.coords.latitude)
        setLongitude(currentLocation.coords.longitude)
    }

    const ScooterLocations = scootersLocation.map((scooter, index) =>
        <Marker
            key={index}
            coordinate={{
                latitude: scooter.lat,
                longitude: scooter.long
            }}
            title={scooter.title}
            image={require('../constants/scooter.png')}
        >
            <Callout onPress={() => navigation.navigate('BarcodeScanner')} tooltip={true}
                     style={{width: Dimensions.get("screen").width * 0.9, height: 200, borderRadius: 10}}>
                <MapCallout/>
            </Callout>
        </Marker>
    )

    return (
        <>
            {latitude !== 0 && longitude !== 0 ?
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{flex: 1}}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0043,
                        longitudeDelta: 0.0034
                    }}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsMyLocationButton={true}
                >
                    {ScooterLocations}
                </MapView> :
                <SurbiLoader/>
            }
        </>
    );
}

export default Map;