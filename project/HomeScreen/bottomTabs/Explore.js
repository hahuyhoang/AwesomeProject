import * as React from 'react';
import { Button, FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { BASE_URL } from '../../config';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';

function Explore({ navigation }) {
  const [isLoading, setIsLoading] = React.useState(true)
  const { listproduct, userInfo } = React.useContext(AuthContext)

  const [list, setList] = React.useState({});

  React.useEffect(() => {
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


    // console.log('====================================');
    // console.log(userInfo.token);
    // console.log('====================================');
    return (
      
        
        <View >
          <TouchableOpacity>
            <View style={[styles.ListItems]}
              backgroundColor={item.background}
              borderColor={item.border_color}>
              <Image style={styles.products} source={{ uri: `${userInfo.url}/${item.media.url}` }} />
              <Text style={styles.textItems}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      

    )

  }
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.main}>
        <View style={styles.Header}>
          <Text style={styles.TextHeader}>Find Products</Text>
        </View>
        <View style={styles.Body}>
          <TextInput placeholder='Search Store' style={styles.Search} />
          <EvilIcons style={{ position: 'absolute', top: '40%', left: '2%' }} name="search" size={24} color="black" />
        </View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => `key-${item.id}`}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
export default Explore;
const styles = StyleSheet.create({
  Header: {
    alignItems: 'center',

  },
  TextHeader: {
    fontFamily: 'Gilroy-Light',
    fontSize: 16
  },
  main: {
    marginTop: 20,
    marginHorizontal: 18,
    // backgroundColor : '#fff'
  },
  Search: {
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: '#F2F3F2',
    borderRadius: 10,
    paddingLeft: 35,
    fontFamily: 'Gilroy-Light',
    padding: 7,
    borderColor: '#f2f3f2'

  },
  Body: {

  },
  Items1: {
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
  textItems: {
    fontFamily: 'Gilroy-Light'
  },
  ListItems: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 150,
    height: 180,
    borderRadius: 10,

  },

  ImgSearch: {
    position: 'absolute',
    marginTop: 22,
    marginLeft: 10,

  },
  products: {
    marginBottom: 25,
    width: '60%',
    height: '50%'
  }
})