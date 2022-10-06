import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Image, } from 'react-native'
import React, { useContext, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import styles from '../login/style'
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay'



import user_login from '../api/user_api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {



  const { isLoading, login } = useContext(AuthContext)
  const [getPasswordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const val = useContext(AuthContext)
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
  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };




  return (
    <KeyboardAvoidingView style={styles.main}

      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <Spinner visible={isLoading} />

      <View style={styles.top}>
        <Image style={styles.image} source={require('../images/Group.png')} />
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>Login</Text>
        <Text style={styles.heading}>Enter your emails and password</Text>

        <View style={styles.login}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder="admin@123"
            style={styles.input}
            value={email}
            onChangeText={text => handleCheckEmail(text)}
          />
        </View>
        {checkValidEmail ? (
          <Text style={styles.textFailed}>Wrong format email</Text>
        ) : (
          <Text style={styles.textFailed}> </Text>
        )}
        <View style={styles.login}>
          <Text style={styles.title}>Password</Text>
          <TextInput
            placeholder="12345"
            autoCapitalize='none'
            style={styles.input}
            secureTextEntry={getPasswordVisible ? false : true}
            onChangeText={text => setPassword(text)}
          >
          </TextInput>
          <TouchableOpacity style={{ position: 'absolute', right: 0, top: '20%' }}
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
          <Text style={styles.fogot}>Fogot password ?</Text>
          <View style={styles.footer}>

            <TouchableOpacity
              style={styles.submit}
              onPress={() => { login(email, password) }}>

              <Text style={styles.singin}>Log In</Text>

            </TouchableOpacity>

            <Text style={styles.have}>Don’t have an account? <Text style={styles.singup}
              onPress={() => { navigation.navigate('Register') }} >Signup</Text></Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
export default Login