import React from 'react';
import AnimatedLoader from "react-native-animated-loader";

function SurbiLoader({isVisible = true}) {
    return (
        <AnimatedLoader
            visible={isVisible}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../constants/loader.json")}
            animationStyle={{width: 200, height: 200}}
            speed={1}
        />
    );
}

export default SurbiLoader;