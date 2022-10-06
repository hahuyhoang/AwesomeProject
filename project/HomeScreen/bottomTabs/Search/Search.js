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
import Product from '../../../products/product'
import styles from './style'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Search = () => {

  return (
    <KeyboardAvoidingView style={styles.main} 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <TextInput autoFocus placeholder='Search...' style={styles.input}></TextInput>
          <TouchableOpacity style={styles.left}>
          <EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.close}>
          <AntDesign name="closecircle" size={20} color="#CCC" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.next}>
            <Image source={require('../../../images/next.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrap}>
          <ScrollView>
            <View style={styles.colums}>
              {/* <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />             */}
            </View>     
          </ScrollView>
        </View>
      
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Search
