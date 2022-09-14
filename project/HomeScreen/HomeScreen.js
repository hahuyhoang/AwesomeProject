import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MainBottom from './bottomTabs/BottomTabs'





const HomeScreen = () => {
  return <MainBottom />
  
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    topIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})