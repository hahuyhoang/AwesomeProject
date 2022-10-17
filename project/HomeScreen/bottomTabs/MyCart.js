import React, { useEffect, useContext, useState } from 'react';
import { SafeAreaView, Text, ScrollView, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import styles from './Style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AntDesign } from '@expo/vector-icons';
import { Value } from 'react-native-reanimated';
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';

const MyCart = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [state, setState] = useState({ dataCart: [] });
  const { listproduct, userInfo } = useContext(AuthContext)

  useEffect(() => {
    const wait = navigation.addListener('focus', () => {
      DataCart();
    });
    return wait;
  }, [])

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

  const onChangeQual = (i, type) => {
    AsyncStorage.removeItem('cart')
      .then(() => {
        const dataCar = state.dataCart
        let cantd = dataCar[i].quantity;

        if (type) {
          cantd = cantd + 1
          dataCar[i].quantity = cantd
          setState({ dataCart: dataCar })
        }
        else if (type == false && cantd >= 2) {
          cantd = cantd - 1
          dataCar[i].quantity = cantd
          setState({ dataCart: dataCar })
        }
        else if (type == false && cantd == 1) {
          dataCar.splice(i, 1)
          setState({ dataCart: dataCar })
        }
      })
      .catch((err) => {
        alert(err)
      })
  }
  const onloadTotal = () => {
    var total = 0
    const cart = state.dataCart
    for (var i = 0; i < cart.length; i++) {
      total = total + (cart[i].price * cart[i].quantity)
    }
    return Math.round(total)
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
                  <Text> {JSON.stringify(state.cart)}</Text>
                  <View style={styles.CartImage}>
                    <Image resizeMode={"contain"} style={{ width: '100%', height: '100%' }} source={{ uri: `${userInfo.url}/${item.image}` }} />
                  </View>
                  <View style={styles.Price}>
                    <Text style={styles.ProductName}>{item.name}</Text>
                    <Text style={styles.ProductText}>{item.title}</Text>
                    <View style={styles.Productnumber}>
                      <TouchableOpacity style={styles.productAdd}
                        onPress={() => onChangeQual(i, false)}
                      >
                        <AntDesign name="minus" size={24} color="black" />
                      </TouchableOpacity>
                      <View style={styles.Number}>
                        <Text style={{ fontWeight: 'bold' }} >{item.quantity}</Text>
                      </View>
                      <TouchableOpacity style={styles.productAdd}
                        onPress={() => onChangeQual(i, true)}
                      >
                        <AntDesign name="plus" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.ProductPrice}>
                    <TouchableOpacity style={styles.productDelete}

                      onPress={() => onChangeQual(i, false)}

                    >
                      <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.PriceName}>
                      <Text style={{ fontWeight: 'bold' }}>${item.price * item.quantity}</Text>
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
              <Text style={{ color: '#fff', }}>${onloadTotal()}</Text>
            </View>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>
  )

}


export default MyCart;