import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LaunchScreen from '../components/launch_screen/LaunchScreen';
import ChooseProfessionScreen from '../components/launch_screen/ChooseProfessionScreen';
import Login from '../components/login/login';
import Register_1 from '../components/login/register_1';
import Register_2 from '../components/login/register_2';
import Register_3 from '../components/login/register_3';
import HomePageScreen from '../components/landing_screen/HomePageScreen';
import RemindersScreen from '../components/landing_screen/RemindersScreen';
import NotificationsScreen from '../components/landing_screen/NotificationsScreen';
import ProfileScreen from '../components/landing_screen/ProfileScreen';
import NutritionScreen from '../components/landing_screen/NutritionScreen';
import Workout from '../components/workout/workout';
import IndividualExercise from '../components/workout/exercises/IndividualExercise';
import Statistics from '../components/workout/statistics/Statistics'
import WorkNavigator from './Navigator-old';

const GetStartedNavigator = createStackNavigator();

const StartNavigator = () => (                      // main navigator
    <GetStartedNavigator.Navigator>
        <GetStartedNavigator.Screen
            name="GetStarted"
            component={LaunchScreen}
            options={{
                headerShown: false
            }}
        />
        <GetStartedNavigator.Screen
            name="ChooseProfession"
            component={ChooseProfessionScreen}
            options={{
                headerShown: false
            }}
        />
        <GetStartedNavigator.Screen
            name="Login"
            component={Login}
            options={{
                headerShown: false
            }}
        />
        <GetStartedNavigator.Screen
            name="Register"
            component={Register_1}
            options={{
                headerShown: false
            }}
        />
        <GetStartedNavigator.Screen
            name="Register_2"
            component={Register_2}
            options={{
                headerShown: false
            }}
        />
        <GetStartedNavigator.Screen
            name="Register_3"
            component={Register_3}
            options={{
                headerShown: false
            }}
        />
        <GetStartedNavigator.Screen
            name="Main"
            component={TabsNav}
            options={{
                headerShown: false
            }}
        />
        <GetStartedNavigator.Screen
            name="WorkoutNavigator"
            component={WorkNavigator}
            options={{
                headerShown: false
            }}
        />
        <GetStartedNavigator.Screen
            name="Nutrition"
            component={NutritionScreen}
        />
    </GetStartedNavigator.Navigator>
);

const Tab = createBottomTabNavigator();

const TabsNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={MyDrawer} />
            <Tab.Screen name="Reminders" component={RemindersScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        // screenOptions: https://stackoverflow.com/questions/68713977/how-to-make-drawercontentoptions-work-in-react-navigation-6-x
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Drawer.Screen name="App" component={HomePageScreen} />
        </Drawer.Navigator>
    );
}

const AppNavigator = () => (
    <NavigationContainer>
        <StartNavigator />
    </NavigationContainer>
);

// const AppNavigator = () => (        // after login navigator
//     <NavigationContainer>
//         <TabsNav />
//     </NavigationContainer>
// );

export default AppNavigator;
