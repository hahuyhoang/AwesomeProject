import React, { useEffect,useRef,useContext, useState } from 'react';
import { SafeAreaView, Text, ScrollView, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import styles from './Style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AntDesign } from '@expo/vector-icons';
import { Value } from 'react-native-reanimated';
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';

const MyCart1 = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [state, setState] = useState({ dataCart: [] });
  const { listproduct, userInfo } = useContext(AuthContext)

  useEffect(() => {
    const wait = navigation.addListener('focus', () => {
      DataCart();
      // DataFavourite()
    });
    return wait;
  }, [])
 const remove_user = async(item) => {
    try{
        let usersJSON= await AsyncStorage.getItem('cart');
        let usersArray = JSON.parse(usersJSON);
        let alteredUsers = usersArray.filter(function(e){
            return e.id !== item.id
        })
        AsyncStorage.setItem('cart', JSON.stringify(alteredUsers));
        setState({
           users:alteredUsers
        })
    }
    catch(error){
        console.log(error)
    }
};
  const DataCart = () => {
    AsyncStorage.getItem('cart')
      .then((cart) => {
        if (cart !== null) {
          const cartfood = JSON.parse(cart)

          setState({
            dataCart: cartfood
          }) 
          console.log('====================================');
          console.log(cartfood);
          console.log('====================================');
        }
      })
      .catch((err) => {
        alert(err)
      })
      .finally(() => setIsLoading(false))
  }


  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar animated={true} />
        <View style={styles.CartTop}>
          <Text style={styles.CartText}>My Cart</Text>
        </View>
        <View style={{ flex: 1, }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: 20, flex: 1 }}>
            {isLoading ? <Text>Load</Text> : state.dataCart.map((item, i) => {
              return (
                <View style={styles.CartProduct}>
                  <View style={styles.CartImage}>
                    <Image resizeMode={"contain"} style={{ width: '100%', height: '80%' }} source={{ uri: `${userInfo.url}/${item.image}` }} />
                  </View>
                  <View style={styles.Price}>
                    <Text style={styles.ProductName}>{item.name}</Text>
                    <Text style={styles.ProductText}>{item.title}</Text>
                    <View style={styles.Productnumber}>
                      <TouchableOpacity style={styles.productAdd}
                      >
                        <AntDesign name="minus" size={24} color="black" />
                      </TouchableOpacity>
                      <View style={styles.Number}>
                        <Text style={{ fontWeight: 'bold' }} >{item.quantity}</Text>
                      </View>
                      <TouchableOpacity style={styles.productAdd}
                      >
                        <AntDesign name="plus" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.ProductPrice}>
                    <TouchableOpacity style={styles.productDelete}
                      onPress={() => remove_user()}
                      >
                        
                      <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.PriceName}>
                      <Text style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</Text>
                    </View>
                  </View>
                </View>
                
              )
            })}
            
          </ScrollView>
          
        </View>
        <View style={styles.botton}>
          <TouchableOpacity style={styles.CkeckCart} onPress={() => { navigation.navigate("Add") }} >
            <Text style={styles.TexBtn}>Go to Checkout</Text>
            <View style={styles.bottonPrice}>
            </View>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>
  )

}


export default MyCart1;