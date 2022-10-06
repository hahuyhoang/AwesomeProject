import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Search from './Search/Search';

import Account from './Account';
import Favourite from './Favourite';
import MyCart from './MyCart';
import ProductDetail from '../../infoProduct/ProductDetail';
import OnboardingItem from '../../slide/OnboardingItem';
import PictureList from '../../slide/Onboarding';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Explore from './Explore';
import Product from '../../products/product';
// import { MaterialIcons } from '@expo/vector-icons';





const Tab = createBottomTabNavigator();

function BottomTab(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowlabe:false,
            tabBarInactiveTintColor:'#000',
            tabBarActiveTintColor:'#53B175',
            tabBarStyle:{
                paddingVertical:10,
                paddingBottom:10,
                height:65,
                borderTopLeftRadius:12,
                borderTopRightRadius:12,
                tabBarBackground:'#fff',
                shadowOpacity: 0.15,
                
            },
        }} 
        
        tabBarOptions={{
            labelStyle:{
                fontSize:12,
                fontWeight: '600',
                fontFamily: 'Gilroy-Light',
            }
        }}
>
        <Tab.Screen name='Shop' component={HomeScreen}
        options={{
            tabBarIcon: ({focused, color, size }) => (
                <Entypo name="shop" size={size} color={color} /> 
            ),
            
        }}
        />
        <Tab.Screen name='Explore' component={Explore}
         options={{
            tabBarIcon: ({focused, color, size }) => (
                <Ionicons name="ios-search" size={size} color={color} /> 
            )
        }}
        />
        <Tab.Screen name='Cart' component={MyCart}
         options={{
            tabBarIcon: ({focused, color, size }) => (
              <Icon name="cart"  size={size} color={color}/>
            )
        }}
         />
        <Tab.Screen name='Favorite' component={Favourite}
         options={{
            tabBarIcon: ({focused, color, size }) => (
                <MaterialIcons name="favorite-outline" size={size} color={color}/>
            )
        }}/>
        <Tab.Screen name='Account' component={Account}
         options={{
            tabBarIcon: ({focused, color, size }) => (
                <FontAwesome name="user-o" size={size} color={color} />
            )
        }}/>
        {/* <Tab.Screen name='ProductDetail' component={ProductDetail} /> */}
        
</Tab.Navigator>
    )
}
export default BottomTab;
