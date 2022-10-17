import { View, Text, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import styles from '../register/style'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
  const val = useContext(AuthContext)
  const [getPasswordVisible, setPasswordVisible] = useState(false)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [password_confirmation, setPassword_confirmation] = useState(null)
  const [userInfoRegister, setUserInfoRegister] = useState({})
  
  const [checkValidEmail, setCheckValidEmail] = useState(false);


  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };



  const register = (name, email, password, password_confirmation) => {
    axios.post(`${BASE_URL}/register`, {
        name,
        email,
        password,
        password_confirmation
    })

        .then(res => {
            let userInfoRegister = res.data;
            console.log(userInfoRegister.user);
            setUserInfoRegister(userInfoRegister.id)
            AsyncStorage.setItem('userInfoRegister', JSON.stringify(userInfoRegister))
        })
        .catch(e => {
            console.log(`register error aaaaar ${e}`)
        });
}

  return (
    <KeyboardAvoidingView style={styles.main}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <View style={styles.top}>
        <Image style={styles.image} source={require('../images/Group.png')} />
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>Sign Up</Text>
        <Text style={styles.heading}>Enter your credentials to continue</Text>
        <View style={styles.register}>

          <View style={styles.register}>
            <Text style={styles.title}>Username</Text>
            <TextInput
              placeholder="username"
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
            ></TextInput>
          </View>
          <View style={styles.register}>
            <Text style={styles.title}>Email</Text>
            <TextInput
              placeholder="admin@123"
              style={styles.input}
              value={email}
              onChangeText={text => handleCheckEmail(text)}
            ></TextInput>
            {/* <Image style={styles.check} source={require('../images/check.png')} /> */}
            {checkValidEmail ? (
              <Text style={styles.textFailed}>Wrong format email</Text>
            ) : (
              <Text style={styles.textFailed}> </Text>
            )}
          </View>
          <View style={styles.register}>
            <Text style={styles.title}>Password</Text>
            <TextInput
              placeholder="12345"
              style={styles.input}
              secureTextEntry={getPasswordVisible ? false : true}
              value={password}
              onChangeText={text => setPassword(text)}
            ></TextInput>
            <TouchableOpacity style={{ position: 'absolute', right: 0, top: '70%' }}
              onPress={() => {
                setPasswordVisible(!getPasswordVisible)
              }}>
              {
                getPasswordVisible ?
                  <Entypo name="eye" size={20} color="black" />
                  :
                  <Entypo name="eye-with-line" size={20} color="black" />
              }
            </TouchableOpacity>
          </View>
          <View style={styles.register}>
            <Text style={styles.title}>Password confirm</Text>
            <TextInput
              placeholder="12345"
              style={styles.input}
              secureTextEntry={getPasswordVisible ? false : true}
              value={password_confirmation}
              onChangeText={text => setPassword_confirmation(text)}
            ></TextInput>
            <TouchableOpacity style={{ position: 'absolute', right: 0, top: '70%' }}
              onPress={() => {
                setPasswordVisible(!getPasswordVisible)
              }}>
              {
                getPasswordVisible ?
                  <Entypo name="eye" size={20} color="black" />
                  :
                  <Entypo name="eye-with-line" size={20} color="black" />
              }
            </TouchableOpacity>
          </View>
          <Text style={styles.fogot}>By continuing you agree to our
            <Text style={styles.singup}> Terms of Service</Text>
            <Text> and </Text><Text style={styles.singup}>Privacy Policy.</Text></Text>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.submit} onPress={() => {
              register(name, email, password, password_confirmation)
              navigation.navigate('CheckCode',{
                paramKey: userInfoRegister
              })
            }}>
              <Text style={styles.singin}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.have}>Already have an account? <Text style={styles.singup}>Signup</Text></Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Register