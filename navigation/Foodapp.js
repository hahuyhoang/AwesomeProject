import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../project/login';
import Product from '../project/products/product';
import Register from '../project/register';
import SignInScreen from '../project/SignIn/SignInScreen';
import Welcome from '../project/Welcome/Welcome';
import BottomTab from '../project/HomeScreen/bottomTabs/BottomTabs';
import ListProDucts from '../project/HomeScreen/bottomTabs/ListProDucts';
import ProductDetail from '../project/infoProduct/ProductDetail';
import Add from '../project/Checkout';
import MyCart from '../project/HomeScreen/bottomTabs/MyCart';
import Accepted from '../project/HomeScreen/bottomTabs/DoneCheckOut/Accepted';
import ErrorScreen from '../project/Error/ErrorScreen';
import CheckCode from '../project/checkCode/CheckCode';


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
        <Stack.Screen name="HomeScreen" component={BottomTab} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ListProDucts" component={ListProDucts} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen 
          name="Add" component={Add}
          options={{presentation: 'modal'}} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Accepted" component={Accepted} 
        options={{presentation: 'modal'}}/>
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
        <Stack.Screen name="CheckCode" component={CheckCode} />

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack;