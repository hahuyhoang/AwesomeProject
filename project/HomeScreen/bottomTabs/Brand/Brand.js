import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import { BASE_URL } from '../../../config';

export default function Brand() {
    const [isLoading, setIsLoading] = useState(true)
    const { listproduct, userInfo } = useContext(AuthContext)
    const navigation = useNavigation();

    const [list, setList] = useState({});

    useEffect(() => {
        getList();
    }, [])

    const getList = () => {
        axios.get(`${BASE_URL}/categories/list`, {
            headers: { Authorization: `Bearer ${userInfo.token}` }

        })

            .then((res) => {
                let list = res.data.list_category;
                // console.log(list)
                var x = list;
                x.forEach(function (listproducts) {
                    // console.log(listproducts)
                });
                setList(list), JSON.stringify(list)



                // console.log('================hihihih====================');
                // console.log(`${userInfo.url}/${x.url}`);
                // console.log('=======================hihihih=============');
            })

            .catch((e) => {
                console.log('====================================');
                console.log(`${BASE_URL}/categories/list`);
                console.log('====================================');
                console.log(`Loi o dau the nhi? ${e}`)

            })
            .finally(() => setIsLoading(false))
    }
    const renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity>
                <View style={styles.proDuct}
                    backgroundColor={item.background}
                    borderColor={item.border_color} 
                >
                    <Image style={styles.image}
                        source={{ uri: `${userInfo.url}/${item.media.url}` }} />

                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )

    }
    return (
        <SafeAreaView>
            <FlatList
                horizontal={true}
                data={list}
                renderItem={renderItem}
                keyExtractor={(item) => `key-${item.id}`}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardProducts: {
        marginBottom: 20,
        marginTop: 20
    },
    cartGroceries: {

    },
    proDuct: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 230,
        height: 100,

        borderRadius: 15,
        fontFamily: 'Gilroy-Light',
        marginRight: 15

    },
    proDuct1: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        borderRadius: 15,
        backgroundColor: '#e5f3ea',
        borderColor: '#e5f3ea',
        fontFamily: 'Gilroy-Light',
        marginRight: 15

    },
    text: {
        fontFamily: 'Gilroy-Light',
        fontSize: 13,
        marginLeft: 10
    },
    image: {
        marginHorizontal: 15,
        width: '30%',
        height: '65%'
    }

})