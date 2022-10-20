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
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '../config'
import { FlatList } from 'react-native-gesture-handler'
import axios from 'axios'


const Product =  ({}) => { 
  const [isLoading, setIsLoading] = useState(true)
  const { listproduct, userInfo } = useContext(AuthContext)
  const navigation = useNavigation();
  const [list, setList] = useState({});
  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      getList();
      
    });
    return willFocusSubscription;
  }, 
  [])
  const AddCart = (item)=>
  {
    const itemcart = {
      id: item.id,
      quantity: 1,
      image:item.media.url,
      name:item.name,
      title:item.title,
      price: item.price
    }
    
     AsyncStorage.getItem('cart')
      .then((datacart)=>{
        
        if (datacart !== null) {
          const cart = JSON.parse(datacart)
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        
        else{
          const cart  = []
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        console.log("========",item)
       
      })
      .catch((err)=>{
        alert("Add Cart")
      })
  

  }
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
      })
      .catch((e) => {
      })
      .finally(() => setIsLoading(false))
  }
  const renderItem = ({ item, index }) => {
    return (
      <SafeAreaView style={{ paddingHorizontal: 10 }}>
        <View style={styles.product}>
       
        <TouchableOpacity onPress={() =>
          navigation.navigate('ProductDetail', {
            paramKey: item.id
          })}>
          <View style={styles.imge}>
            <Image style={styles.img} source={{ uri: `${userInfo.url}/${item.media.url}` }} />
            
          </View>
          <View style={styles.colum} >
            <TouchableOpacity >
              <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
            <Text style={styles.span}>{item.title}</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.price}>
            <View style={styles.cardPrice}>
              <Text style={styles.numBerprice}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => AddCart(item)}
               >
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
            showsHorizontalScrollIndicator={false} /> 
            )}
           
      </SafeAreaView>
  )
 
}
export default Product;
