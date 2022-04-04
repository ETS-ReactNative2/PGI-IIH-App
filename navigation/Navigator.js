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
import Main from '../components/main/main';
import HomePageScreen from '../components/landing_screen/HomePageScreen';
import RemindersScreen from '../components/landing_screen/RemindersScreen';
import NotificationsScreen from '../components/landing_screen/NotificationsScreen';
import ProfileScreen from '../components/landing_screen/ProfileScreen';


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
            component={Register_1}
        />
        <GetStartedNavigator.Screen
            name="Register_2"
            component={Register_2}
        />
        <GetStartedNavigator.Screen
            name="Register_3"
            component={Register_3}
        />
        <GetStartedNavigator.Screen
            name="Main"
            component={Main}
        />
    </GetStartedNavigator.Navigator>
);

const Tab = createBottomTabNavigator();

const TabsNav = () => {
    return (
          <Tab.Navigator
          screenOptions={{
              headerShown:false
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
            headerTitleShown:false
        }}>
        <Drawer.Screen name="App" component={HomePageScreen} />
        </Drawer.Navigator>
    );
}

// const AppNavigator = () => (
//     <NavigationContainer>
//         <StartNavigator/>
//     </NavigationContainer>
// );

const AppNavigator = () => (
    <NavigationContainer>
        <TabsNav/>
    </NavigationContainer>
);

export default AppNavigator;
