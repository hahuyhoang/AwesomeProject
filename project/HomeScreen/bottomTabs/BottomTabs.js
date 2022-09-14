import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Search from './Search/Search';
import SettingsScreen from './SettingsScreen';



const Tab = createBottomTabNavigator();

function BottomTab(){
    return(
                <Tab.Navigator>
                    <Tab.Screen name='Home' component={HomeScreen}/>
                    <Tab.Screen name='Search' component={Search}/>
                    <Tab.Screen name='Settings' component={SettingsScreen}/>
                    
                </Tab.Navigator>
    )
}
export default BottomTab;
