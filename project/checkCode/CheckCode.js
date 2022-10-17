import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CodeInput from './CodeInput';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../config';


export default function CheckCode({ navigation, route }) {

    const [userInfoRegister] = useState({})



    const [code, setCode] = useState('')
    const [pinReady, setPinReady] = useState(false)

    const MAX_CODE_LEGTH = 5;



    const checkCodeRes = (user_id, email, code) => {
        axios.post(`${BASE_URL}/check-register-code`,{
            user_id,
            email,
            code
        })
        .then(res =>{
            
        })
    }
    console.log('=======================ffffffffffff=============');
    console.log(`${route.params.paramKey}`);
    console.log('======================ffffff==============');
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{ position: 'absolute', left: 0 }}
                    onPress={() => {
                        navigation.navigate('Register')
                    }} >
                    <Feather name="chevron-left" size={28} color="black" />
                </TouchableOpacity>
                <View style={styles.TextHeader}>
                    <Text style={styles.headertext}>
                        Verify
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.infoEmail}>
                        <Text style={styles.TextEmail}>Code send to your email, please check in your email {}</Text>
                        <MaterialCommunityIcons name="email-open-outline" size={28} color="black" />
                        <Text style={styles.TextEmail} > Email: {route.params.paramKey.email}</Text>
                    </View>
                </View>
                <TextInput
                    placeholder="nhap code vao di"
                    style={styles.input}
                    
                    
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        marginTop: 25,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomColor: '#7c7c7c'
    },
    TextHeader: {

        alignItems: 'center',
        marginBottom: '2%'
    },
    headertext: {
        fontFamily: 'Gilroy-Light',
        fontSize: 25
    },
    container: {
        marginTop: 25,
        marginHorizontal: 10
    },
    infoEmail: {
        // justifyContent: 'center',
        alignItems: 'center',

    },
    TextEmail: {
        marginBottom: 10,
        fontFamily: 'Gilroy-Light'
    },
    input : {
        position :"relative",
        width : "100%",
        backgroundColor: "#0,0,0,0",
        height : 36 ,
        fontSize: 12,
        borderBottomWidth:1,
        borderColor: "#E9E9E9",
        autoComplete:""
    },
})