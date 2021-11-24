import React from 'react';
import AppRouter from './navigation/Router';
import {colors} from './constants/Colors';

function App() {
    colors.getUserInfo()
    return (
        <AppRouter/>
    );
}

export default App;

