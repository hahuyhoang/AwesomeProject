import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../config'
import { FlatList } from 'react-native-gesture-handler'
import axios from 'axios'
const Product = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { listproduct, userInfo } = useContext(AuthContext)
  const navigation = useNavigation();

  const [list, setList] = useState({});

  useEffect(() => {
    getList();
  }, [])

  const getList = () => {


    axios.get(`${BASE_URL}/products/list`, {
      headers: { Authorization: `Bearer ${userInfo.token}` }

    })

      .then((res) => {
        let list = res.data.list_product;
        var x = list.data;
        x.forEach(function (listproducts) {
          // console.log(listproducts)
        });
        setList(x), JSON.stringify(x)



        // console.log('================hihihih====================');
        // console.log(filter);
        // console.log('=======================hihihih=============');
      })

      .catch((e) => {
        console.log('====================================');
        console.log(`${BASE_URL}/products/list`);
        console.log('====================================');
        console.log(`Loi o dau the nhi? ${e}`)

      })
      .finally(() => setIsLoading(false))
  }


  const renderItem = ({ item, index }) => {
    return (
      <SafeAreaView style={{ paddingHorizontal: 10 }}>
        <View style={styles.product}>
          <View style={styles.imge}>
            <Image style={styles.img} source={{ uri: `${userInfo.url}/${item.media.url}` }} />
          </View>
          <View style={styles.colum} >
            <TouchableOpacity onPress={() => { navigation.navigate('ProductDetail') }}>
              <Text style={styles.title}>{item.name}</Text>

            </TouchableOpacity>
            <Text style={styles.span}>{item.title}</Text>
          </View>
          <View style={styles.price}>
            <View style={styles.cardPrice}>
              <Text style={styles.numBerprice}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.btn} source={require('../images/add.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }
  return (

    <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
      {isLoading ? <ActivityIndicator /> : (

        <FlatList
          horizontal={true}
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => `key-${item.id}`}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      )}

    </SafeAreaView>
  )
}

export default Product;
