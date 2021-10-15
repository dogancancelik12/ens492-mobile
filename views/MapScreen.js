import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location'
import SurbiLoader from "../components/SurbiLoader";


function Map() {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    async function getCurrentLocation() {
        const currentLocation = await Location.getCurrentPositionAsync({})
        setLatitude(currentLocation.coords.latitude)
        setLongitude(currentLocation.coords.longitude)
    }

    useEffect(() => {
        getCurrentLocation(
            {
                enableHighAccuracy: true
            }
        ).then()
    }, []);

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
                /> :
                <SurbiLoader/>
            }
        </>
    );
}

export default Map;