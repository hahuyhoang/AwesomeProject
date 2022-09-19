import * as React from 'react';
import { Button, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
 import {StyleSheet} from 'react-native'


function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
    <View style={styles.main}>
      <View style={styles.Header}>
        <Text style={styles.TextHeader}>Find Products </Text>
      </View>
      <View style={styles.Body}>
        <TextInput  placeholder='Search Store' style={styles.Search} />
        <Image style={styles.ImgSearch} source={require('../../images/search.png')} />
      </View>
      <ScrollView>
        <View style={styles.ListItems}>
          <TouchableOpacity style={styles.Items1}>
            <View >
              <Image style={styles.products} source={require('../../images/card-ProDucts.png')} />
            </View>
            <View>
              <Text style={styles.textItems}>Frash Fruits - Vegetable</Text>
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.Items2}>
            <View >
              <Image style={styles.products}  source={require('../../images/card-ProDucts.png')} />
            </View>
              <View>
                <Text style={styles.textItems}>Frash Fruits - Vegetable</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ListItems}>
            <TouchableOpacity style={styles.Items3}>
              <View >
                <Image style={styles.products} source={require('../../images/card-ProDucts.png')} />
              </View>
              <View>
                <Text style={styles.textItems}>Frash Fruits - Vegetable</Text>
              </View>
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.Items4}>
              <View >
                <Image style={styles.products} source={require('../../images/card-ProDucts.png')} />
              </View>
                <View>
                  <Text style={styles.textItems}>Frash Fruits - Vegetable</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ListItems}>
            <TouchableOpacity style={styles.Items3}>
              <View >
                <Image style={styles.products} source={require('../../images/card-ProDucts.png')} />
              </View>
              <View>
                <Text style={styles.textItems}>Frash Fruits - Vegetable</Text>
              </View>
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.Items4}>
              <View >
                <Image style={styles.products} source={require('../../images/card-ProDucts.png')} />
              </View>
                <View>
                  <Text style={styles.textItems}>Frash Fruits - Vegetable</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ListItems}>
            <TouchableOpacity style={styles.Items3}>
              <View >
                <Image style={styles.products} source={require('../../images/card-ProDucts.png')} />
              </View>
              <View>
                <Text style={styles.textItems}>Frash Fruits - Vegetable</Text>
              </View>
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.Items4}>
              <View >
                <Image style={styles.products} source={require('../../images/card-ProDucts.png')} />
              </View>
                <View>
                  <Text style={styles.textItems}>Frash Fruits - Vegetable</Text>
                </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
    </SafeAreaView>
  );
}
export default SettingsScreen;
const styles = StyleSheet.create({
  Header:{
    alignItems:'center',
    
  },
  TextHeader:{
    fontFamily: 'Gilroy-Light',
    fontSize: 16
  },
  main:{
    marginTop: 20,
    marginHorizontal: 18,
    // backgroundColor : '#fff'
  }, 
  Search:{
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: '#F2F3F2',
    borderRadius: 10,
    paddingLeft: 35,
    fontFamily: 'Gilroy-Light',
    padding: 7,
    borderColor: '#f2f3f2'
    
  },
  Body:{
    
  },
  Items1:{
    borderWidth: 1,
    width: 150,
    alignItems: 'center',
    height: 180,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#eef7f1',
    borderColor: '#eef7f1'
  },
  textItems:{
    fontFamily: 'Gilroy-Light'
  },
  ListItems:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
    
  },
  Items2:{
    borderWidth: 1,
    width: 150,
    alignItems: 'center',
    height: 180,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#fbf2e9',
    borderColor: '#fbf2e9'
  },
  Items3:{
    borderWidth: 1,
    width: 150,
    alignItems: 'center',
    height: 180,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#fde8e4',
    borderColor: '#fde8e4'
  },
  Items4:{
    borderWidth: 1,
    width: 150,
    alignItems: 'center',
    height: 180,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#f4ebf7',
    borderColor: '#f4ebf7'
  },
  ImgSearch:{
    position: 'absolute',
    marginTop : 22,
    marginLeft : 10
  },
  products:{
    marginBottom : 25
  }
})