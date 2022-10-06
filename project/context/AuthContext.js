import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [proDuct, setProDuct] = useState({})

    const register = (name, email, password, password_confirmation) => {
        console.log('log', `${BASE_URL}/register`)
        axios.post(`${BASE_URL}/register`, {
            name,
            email,
            password,
            password_confirmation
        })

            .then(res => {
                let userInfoRegister = res.data;
                console.log(userInfoRegister);
                AsyncStorage.setItem('userInfoRegister', JSON.stringify(userInfoRegister))
            })
            .catch(e => {
                console.log(`register error aaaaar ${e}`)
            });
    }

    const login = (email, password) => {
        setIsLoading(true);
        axios
            .post(`${BASE_URL}/login`, {
                email,
                password
            })
            .then(res => {
                let userInfo = res.data
                console.log(userInfo);
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo',JSON.stringify(userInfo))
                setIsLoading(false)

            })
            .catch(e => {
                setIsLoading(false)
                console.log(`login failed login false ${e}`)
            })
    }
    const logout = () => {
        setIsLoading(true)

        axios.post(`${BASE_URL}/logout`, {}, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        },
        ).then(res => {
            console.log(res.data)
            AsyncStorage.removeItem('userInfo');
            setUserInfo({})
            setIsLoading(false)
        }).catch(e => {
            console.log(`logout error ${e}`)
            setIsLoading(false)
        });
    }
    // const listproduct = async () => {
    //     const res = await axios.get(`${BASE_URL}/products/list`,{
    //         headers: { Authorization: `Bearer ${userInfo.token}` }

    //     }) 
    //     const data = await res.json();
    //     proDuct = data;
    //     setProDuct(data)

    // }
    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                register,
                login,
                logout,
                // listproduct
            }}>
            {children}
        </AuthContext.Provider>
    )
}
