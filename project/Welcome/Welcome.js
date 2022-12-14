import { Text, StyleSheet, View, Button, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import React, { Component, useContext, useState } from 'react';
import { isLoading, useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../context/AuthContext';
const {WIDTH, HEIGHT} = Dimensions.get('window')


const Welcome = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    'Gilroy-Light': require('../../assets/font/Gilroy-SemiBold.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  // const {isLoading} = useContext(AuthContext)
    return (
      <View style={styles.container}>
         {/* <Spinner visible={isLoading} /> */}
          <ImageBackground style={styles.background} source ={require('../images/back.jpg')} resizeMode="cover">

              <View style={{flex:2}}></View>
              <Image style={styles.logo} source={require('../images/logo.png')} />
              <View style={styles.body}>
                <Text style = {styles.firstTitle}>Welcome</Text>
                <Text style={styles.secondTitle}>
                  to our store
                </Text>
                <Text style = {styles.title}>Ger your groceries in as fast as one hour</Text>
                
              <TouchableOpacity style={styles.getstarted} onPress={() => {navigation.navigate('Login')}} >
                 
                  <Text style ={ styles.text} >Get Started</Text>
                </TouchableOpacity>
              </View>
          </ImageBackground>
          </View>
    )
}

export default Welcome;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: WIDTH,
        height: HEIGHT,

    },
    background:{
      width: '100%',
      height: '100%',
      flex: 2, 
      justifyContent: 'center',
      alignItems: 'center',

    },
    logo:{
      width: 41,
      height: 48,
      
    },
    body:{
      flex: 1,
      alignItems: 'center',
      marginBottom: 60,
      paddingVertical: 20
      
      
    },
    firstTitle:{
      color: 'white',
      fontSize: 40,
      fontFamily: 'Gilroy-Light',
      
      
    },
    secondTitle:{
        color: 'white',
        justifyContent: 'center',
        fontSize: 40,
        fontFamily: 'Gilroy-Light',
    },
    title:{
      color: '#c6bdb7',
      fontSize: 14,
      fontFamily: 'Gilroy-Light'
      
      
    },
    getstarted:{
      backgroundColor: '#53B175',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 60,
      borderRadius: 20,
      marginVertical: 30,
      
      
      
    },
    text:{
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Gilroy-Light'
    }
})