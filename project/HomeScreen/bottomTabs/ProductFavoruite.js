import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button,Image, SafeAreaView,Text,ScrollView, View,TouchableOpacity} from 'react-native';
import styles from'./Style'
import { Entypo } from '@expo/vector-icons';
 
function ProductFavoruite({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, }}>
        <View style={styles.CartProductRow}>
          <View style={styles.CartImage}>
            <Image style={styles.Image} source={require('../../images/product_1.png')} />
          </View>
          <View style={styles.ProductPriceName}>
            <Text style={styles.ProductName}>Sprite Can</Text>
            <Text style={styles.ProductText}>325ml,Price</Text>
          </View>
         
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <View style={styles.FavouritePrice}>
              <Text style={{fontWeight:'bold', fontFamily: 'Gilroy-Light'}}>$1.99</Text>
            </View>
            <TouchableOpacity style={styles.ProductNext}>
            <Entypo name="chevron-right" size={24} color="black" />
              
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
}
export default ProductFavoruite;