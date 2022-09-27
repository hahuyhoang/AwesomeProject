import { StyleSheet, Text, View } from 'react-native'
import React, {createContext} from 'react'
import axios from 'axios';
import { BASE_URL } from '../config';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const regisster = (name, email, password, password_confirmation) =>{
        console.log('log',`${BASE_URL}/register`)
        axios.post(`${BASE_URL}/register`,{
            name,
            email, 
            password, 
            password_confirmation
        })
        
        .then(res => {
            let userInfo = res.data;
            console.log(userInfo);
        })
        .catch(e => {
            console.log(`register error ${e}`)
        });
    }


  return (
    <AuthContext.Provider value={{regisster}}>
        {children}
    </AuthContext.Provider>
  )
}
