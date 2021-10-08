import React from 'react';
import MapView, {Marker} from 'react-native-maps';

function Map() {
    return (
        <MapView
            style={{flex: 1}}
            initialRegion={{
                latitude: 41.11453718209827,
                longitude: 29.061150093389895,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{
                    latitude: 41.11453718209827,
                    longitude: 29.061150093389895,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                title={"Tolga Ev"}
            />
        </MapView>
    );
}

export default Map;