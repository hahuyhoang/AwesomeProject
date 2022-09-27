import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native'
import React, { Component } from 'react'

const {HEIGHT,WIDTH} = Dimensions.get('window')

const SignInScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
          <View style={styles.topBody}>
            <Image style={styles.imgBackground} source={require('../images/image-sign-In.png')}/>
            <Image style={styles.absoluteImg} source={require('../images/icon-SignIn.png')} />
          </View>

          <KeyboardAvoidingView style={styles.main} 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        keyboardVerticalOffset ={10}
        >
          <View style={styles.bottomBody}>
            <Text style={styles.text}>Get your groceries</Text>
            <Text style={styles.text}>with nectar</Text>
          <View style={styles.phoneNumber}>
            <TextInput style={styles.textInput} placeholder='vui long nhap so dien thoai'/>
              <Image style={styles.flagIcon} source={require('../images/flag-icon.png')}></Image>
              <Text style={{position: 'absolute', bottom: '28%',left: '7%', fontFamily: 'Gilroy-Light'}}>+880</Text>
          </View>

      
        <View style={styles.socialmedia}>
          <Text style={styles.textConnect}>Or connect with social media. <Text style={{color:'#53B175'}} onPress={() => {navigation.navigate('Login')}} >Login?</Text></Text>
        </View>
        <View style={styles.butomSocial}>
          <TouchableOpacity style={styles.google}>
           <View style={{width: '20%', marginLeft: '10%'}}><Image style={styles.googleIcon} source={require('../images/google.png')} /></View>
            <View><Text style={styles.textSocial}>Continue with Google</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebook}>
            <View style={{width: '15%', marginLeft: '5%'}}><Image style={styles.facebookIcon} source={require('../images/facebook.png')} /></View>
            <Text style={styles.textSocial}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
        </View>
      </KeyboardAvoidingView>
      </View>
    )
}
export default SignInScreen;


const styles = StyleSheet.create({
  main:{
    flex: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imgBackground:{
    flex: 2,
    resizeMode: 'cover',
    position: 'relative',
    height: HEIGHT,
    width: WIDTH
  },
  topBody:{
    flex: 1,
    height: HEIGHT ,
    width: WIDTH
  },
  absoluteImg:{
    position: 'absolute',
    top: '10%',
    right: '15%',
    width: '15%',
    height: '13%'
  },
  bottomBody:{
    marginHorizontal: 20
  },
  textInput:{
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    position:'relative',
    paddingLeft: 80,
    fontFamily: 'Gilroy-Light',
    paddingBottom: 5
  },
  flagIcon:{
    position: 'absolute',
    bottom: 8
  },
  phoneNumber:{
    marginTop: 30
  },
  text:{
    fontSize: 23,
    fontFamily: 'Gilroy-Light'
  },
  socialmedia:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,

  },
  textConnect:{
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Gilroy-Light'
  },
  butomSocial:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  google:{
    backgroundColor: '#5383EC',
    width: 300,
    height: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 12,
    flexDirection: 'row'
    
  },
  facebook:{
    backgroundColor: '#4A66AC',
    width: 300,
    height: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    paddingLeft: 27
  },
  textSocial:{
    color: '#fff',
    
  },
  
  googleIcon:{
    
  } 
  
})