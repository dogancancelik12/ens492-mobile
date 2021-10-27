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
import ProductDetail from "../views/ProductDetail";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import Orders from "../views/Orders";
import Wallet from "../views/Wallet";
import Addresses from "../views/Addresses";
import Settings from "../views/Settings";
import AddCreditCard from "../views/AddCreditCard";
import UserInformation from "../views/UserInformation";
import ChangePassword from "../views/ChangePassword";

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
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        headerShown: false
                    }}
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

                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Checkout"
                    component={Checkout}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Orders"
                    component={Orders}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Wallet"
                    component={Wallet}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Addresses"
                    component={Addresses}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="AddCreditCard"
                    component={AddCreditCard}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="UserInformation"
                    component={UserInformation}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                    options={{
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
                component={ProductsStack}
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

const ProductsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Products_"
                component={Products}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default OnBoardingStack;

