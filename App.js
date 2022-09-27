import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, KeyboardAvoidingView, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from './navigation/Foodapp';
import Checkout from './project/Checkout';
import AuthProvider from './project/context/AuthContext';



const Tab = createBottomTabNavigator();
export default function App() {
  return( 
  <AuthProvider>
    <MainNavigator />
  </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
