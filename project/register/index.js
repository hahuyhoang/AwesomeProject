import { View, Text,KeyboardAvoidingView ,TextInput,Image,TouchableOpacity} from 'react-native'
import React ,{ useContext, useState} from 'react'

import styles from '../register/style'
import { AuthContext } from '../context/AuthContext'

const Register = ({navigation}) => {
  const val = useContext(AuthContext)
  const [getPasswordVisible,setPasswordVisible ] = useState(false)  
  const {regisster} = useContext(AuthContext)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)


  return (
    <KeyboardAvoidingView style={styles.main} 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    keyboardVerticalOffset ={10}
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
                value = {name}
                onChangeText ={text => setName(text)}
              ></TextInput>
            </View>
            <View style={styles.register}>
              <Text style={styles.title}>Email</Text>
              <TextInput 
                placeholder="admin@123" 
                style={styles.input}
                value = {email}
                onChangeText ={text => setEmail(text)}
                ></TextInput>
              <Image style={styles.check} source={require('../images/check.png')} />
            </View>
            <View style={styles.register}>
              <Text style={styles.title}>Password</Text>
              <TextInput
                placeholder="12345" 
                style={styles.input} 
                secureTextEntry={getPasswordVisible ? false : true}
                value = {password}
                onChangeText ={text => setPassword(text)}
                ></TextInput>
              <TouchableOpacity
                onPress={() =>{
                setPasswordVisible(!getPasswordVisible)
                }}>
                  {
                    getPasswordVisible?
                    <Image style={styles.eye} source={require('../images/Eye.png')} />
                    :
                    <Image style={styles.eye} source={require('../images/eyes.png')} />
                  }
              </TouchableOpacity>
            </View>
            <View style={styles.register}>
              <Text style={styles.title}>Password confirm</Text>
              <TextInput 
                  placeholder="12345" 
                  style={styles.input} 
                  secureTextEntry={getPasswordVisible ? false : true}
                  value = {passwordConfirmation}
                onChangeText ={text => setPasswordConfirmation(text)}
                  ></TextInput>
              <TouchableOpacity
                onPress={() =>{
                setPasswordVisible(!getPasswordVisible)
                }}>
                  {
                    getPasswordVisible?
                    <Image style={styles.eye} source={require('../images/Eye.png')} />
                    :
                    <Image style={styles.eye} source={require('../images/eyes.png')} />
                  }
              </TouchableOpacity>
            </View>
            <Text style={styles.fogot}>By continuing you agree to our
            <Text style={styles.singup}> Terms of Service</Text>
            <Text> and </Text><Text style={styles.singup}>Privacy Policy.</Text></Text>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.submit} onPress={() => {
                regisster(name, email, password, passwordConfirmation),
                navigation.navigate('CheckCode')
              }}>
               <Text style={styles.singin}> Sign In</Text>
              </TouchableOpacity>
              <Text style={styles.have}>Already have an account? <Text style={styles.singup}>Signup</Text></Text>
            </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Register