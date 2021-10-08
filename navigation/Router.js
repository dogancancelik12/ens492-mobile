import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from "../views/Login";
import Home from "../views/Home";
import Products from "../views/Products";
import MapScreen from "../views/MapScreen";
import Profile from "../views/Profile";
import SignUp from "../views/SignUp";
import SplashScreen from "../views/SplashScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function OnBoardingStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerShown='false'>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerLeft: null
                    }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                <Stack.Screen
                    name="App"
                    component={AppStack}
                    options={{
                        headerLeft: null,
                        gestureEnabled: false,
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const AppStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Products"
                component={Products}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="scooter" color={color} size={size}/>
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="map-marker" color={color} size={size}/>
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default OnBoardingStack;

