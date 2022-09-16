import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Product from '../../products/product'

export default function ListProDucts() {
  return (
    <View style={styles.wrap}>
        <View style={styles.header}>
        
            <Text style={styles.textHeader}>List Items</Text>
        </View>
          <ScrollView>
            <View style={styles.colums}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
            </View>     
          </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({
    colums:{

        flex:1,
        width:'100%',
        height:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItem:'flex-end',
        justifyContent:'space-between',
    },
    wrap:{
        marginTop: 20,
        flex:1,
        width:'100%',
        paddingHorizontal:15,
    },
    header:{
        top: 0,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
    textHeader:{
        fontFamily: 'Gilroy-Light',
        fontSize: 18
    }
})