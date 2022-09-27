import React, { Component, useState } from 'react';
import { Button, Image, SafeAreaView, Text, ScrollView, View, TouchableOpacity, StatusBar, Pressable, Modal, Alert } from 'react-native';
import styles from './Style'
import ProductCart from './ProductCart';
import ProductFavoruite from './ProductFavoruite';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



export default function MyCart({ navigation }) {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <View style={{ flex: 1 }}>

      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar
          animated={true}
        // backgroundColor="#61dafb"
        />
        <View style={styles.CartTop}>
          <Text style={styles.CartText}>My Cart</Text>
        </View>
        <View style={{ flex: 1, }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: 20, }}>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </ScrollView>
        </View>
        <View style={styles.botton}>
          <TouchableOpacity style={styles.CkeckCart} onPress={() => {navigation.navigate("Add")}} >
            <Text style={styles.TexBtn}>Go to Checkout</Text>
            <View style={styles.bottonPrice}>
              <Text style={{ color: '#fff', }}>$12.69
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    </View>
  );
}
