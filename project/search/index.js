import {
  View,
  Text,
  KeyboardAvoidingView ,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import React ,{ useState,} from 'react'
import Product from '../products/product'
import styles from './style'
const Search = () => {

  return (
    <KeyboardAvoidingView style={styles.main} 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    keyboardVerticalOffset ={10}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <TextInput placeholder='Search...' style={styles.input}></TextInput>
          <TouchableOpacity style={styles.left}>
            <Image source={require('../images/search.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.close}>
            <Image source={require('../images/close.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.next}>
            <Image source={require('../images/next.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrap}>
          <View style={styles.colums}>
            <ScrollView>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />              
            </ScrollView>
          </View>     
           
          </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
export default Search