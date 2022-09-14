import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../project/login';
import Product from '../project/products/product';
import Register from '../project/register';
import SignInScreen from '../project/SignIn/SignInScreen';
import Welcome from '../project/Welcome/Welcome';
import HomeScreen from '../project/HomeScreen/HomeScreen';
import Search from '../project/search';

const Stack = createNativeStackNavigator();

const MyStack = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signin" component={SignInScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack;