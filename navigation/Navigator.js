import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import LaunchScreen from '../components/launch_screen/LaunchScreen';
import ChooseProfessionScreen from '../components/launch_screen/ChooseProfessionScreen';
import Login from '../components/login/login';
import Register from '../components/login/register';

const GetStartedNavigator = createStackNavigator();

const StartNavigator = () => (
    <GetStartedNavigator.Navigator screenOptions={{ headerShown: false }}>
        <GetStartedNavigator.Screen
            name="GetStarted"
            component={LaunchScreen}
        />
        <GetStartedNavigator.Screen
            name="ChooseProfession"
            component={ChooseProfessionScreen}
        />
        <GetStartedNavigator.Screen
            name="Login"
            component={Login}
        />
        <GetStartedNavigator.Screen
            name="Register"
            component={Register}
        />
    </GetStartedNavigator.Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <StartNavigator />
    </NavigationContainer>
);

export default AppNavigator;
