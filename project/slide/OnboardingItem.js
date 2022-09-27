import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import slide from './slide'


export default function OnboardingItem({item}) {
  const {WIDTH, HEIGHT} = Dimensions.get('window')
  return (
    <View style={[styles.container, {WIDTH}]}>
      <Image source={item.image} style={{width: 350}}  />

      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    image:{
        // width: WIDTH
        
    }
})