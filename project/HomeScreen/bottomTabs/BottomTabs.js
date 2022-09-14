import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import SettingsScreen from './SettingsScreen';


const Tab = createBottomTabNavigator();

function TabNavigatior(){
    return(
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
    )
}
const MainBottom = () => { 
    return(
        <NavigationContainer>
            <TabNavigatior>

            </TabNavigatior>
        </NavigationContainer>
    )
}
export default MainBottom;