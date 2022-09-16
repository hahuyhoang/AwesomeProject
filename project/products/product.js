import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import React ,{ useState} from 'react'
import styles from './style'
const Product = () => {
  return (
    <View style={styles.product}>
      <Image style={styles.img} source={require('../images/Egg.png')} />
      <View style={styles.colum}>
        <Text style={styles.title}>Egg Chicken Red</Text>
        <Text style={styles.span}>4pcs,price</Text>
      </View>
      <View style={styles.price}>
        <View style={styles.cardPrice}>
          <Text style={styles.numBerprice}>$1.99</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.btn} source={require('../images/add.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Product;
