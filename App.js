import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,KeyboardAvoidingView, View } from 'react-native';
import MainNavigator from './navigation/Foodapp';
import Login from './project/login'
import Register from './project/register'
import Search from './project/search'
export default function App() {
  return <MainNavigator></MainNavigator>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
