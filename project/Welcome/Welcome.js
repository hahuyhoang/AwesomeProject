import { Text, StyleSheet, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';




const Welcome = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    'Gilroy-Light': require('../../assets/font/Gilroy-SemiBold.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

    return (
      <View style={styles.container}>
          <ImageBackground style={styles.background} source ={require('../images/back.jpg')} resizeMode="cover">

              <View style={{flex:2}}></View>
              <Image style={styles.logo} source={require('../images/logo.png')} />
              <View style={styles.body}>
                <Text style = {styles.firstTitle}>Welcome</Text>
                <Text style={styles.secondTitle}>
                  to our store
                </Text>
                <Text style = {styles.title}>Ger your groceries in as fast as one hour</Text>
                
              <TouchableOpacity style={styles.getstarted} onPress={() => {navigation.navigate('Signin')}} >
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
        flex: 1
    },
    background:{
      flex: 1, 
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