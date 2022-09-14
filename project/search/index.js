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
    // behavior={Platform.OS === "ios" ? "padding" : "height"} 
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <TextInput autoFocus placeholder='Search...' style={styles.input}></TextInput>
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
          <ScrollView>
            <View style={styles.colums}>
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
              <Product />            
              <Product />            
            </View>     
          </ScrollView>
        </View>
      
        <View style={styles.bottomNavigate}>
          <TouchableOpacity style={styles.Icon}>
            <Image style={styles.Image} source={require('../images/home.png')} />
            <Text style={styles.textIcon}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Icon} >
            <Image style={styles.Image} source={require('../images/Search(1).png')} />
            <Text  style={styles.textCart} >Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Icon}>
            <Image style={styles.Image} source={require('../images/card.png')} />
            <Text style={styles.textIcon}>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Icon}>
            <Image style={styles.Image} source={require('../images/like.png')} />
            <Text style={styles.textIcon}>Favourite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Icon}>
            <Image style={styles.Image} source={require('../images/user.png')} />
            <Text style={styles.textIcon}>Account</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Search
