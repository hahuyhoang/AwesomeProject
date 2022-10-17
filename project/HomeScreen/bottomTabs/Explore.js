import * as React from 'react';
import { Button, Dimensions, FlatList, Image, Modal, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { BASE_URL } from '../../config';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
const { width } = Dimensions.get("window");
const cardWidth = width / 2.5;



function Explore({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)
  const { listproduct, userInfo } = useContext(AuthContext)
  const [filterSearch, setFillterSearch] = useState([]) // master search
  const [search, setSearch] = useState('')
  const [list, setList] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [listData, setListData] = useState([]); //master Data


  useEffect(() => {
    getList();
    getListitem();
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
      })

      .catch((e) => {
        console.log('====================================');
        console.log(`${BASE_URL}/categories/list`);
        console.log('====================================');
        console.log(`Loi o dau the nhi? ${e}`)

      })
      .finally(() => setIsLoading(false))
  }
  const getListitem = () => {


    axios.get(`${BASE_URL}/products/list`, {
      headers: { Authorization: `Bearer ${userInfo.token}` }

    })

      .then((res) => {
        let listData = res.data.list_product;
        var data = listData.data;
        data.forEach(function (listproducts) {
          // console.log(listproducts)
        });
        setListData(data), JSON.stringify(data)
        setFillterSearch(data), JSON.stringify(data)
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

      <View style={{ flexDirection: 'row' }}>


        <View style={{ flex: 0.5, marginLeft: 15 }}>
          <TouchableOpacity>
            <View style={[styles.ListItems]}
              backgroundColor={item.background}
              borderColor={item.border_color}>
              <Image style={styles.products} source={{ uri: `${userInfo.url}/${item.media.url}` }} />
              <Text style={styles.textItems}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5 }}>
          <TouchableOpacity>
            <View style={[styles.ListItems]}
              backgroundColor={item.background}
              borderColor={item.border_color}>
              <Image style={styles.products} source={{ uri: `${userInfo.url}/${item.media.url}` }} />
              <Text style={styles.textItems}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )

  }

  const searchFilter = (text) => {
    if (text) {
      const newData = listData.filter((item) => {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setFillterSearch(newData)
      setSearch(text)
    } else {
      setFillterSearch(listData)
      setSearch(text)
    }
  }


  const renderData = ({ item, index }) => {


    return (
      <SafeAreaView style={{ paddingHorizontal: 10 }}>
        <View style={styles.product}>
          <View style={styles.imge}>
            <Image style={styles.img} source={{ uri: `${userInfo.url}/${item.media.url}` }} />
          </View>
          <View style={styles.colum} >
            <TouchableOpacity onPress={() => { navigation.navigate('ProductDetail',
            {
              paramKey: item.id
            }) }}>
              <Text style={styles.title}>{item.name}</Text>

            </TouchableOpacity>
            <Text style={styles.span}>{item.title}</Text>
          </View>
          <View style={styles.price}>
            <View style={styles.cardPrice}>
              <Text style={styles.numBerprice}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.btn} source={require('../../images/add.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.main}>
        <View style={styles.Header}>
          <Text style={styles.TextHeader}>Find Products</Text>
        </View>
        <TouchableWithoutFeedback style={styles.Body} onPress={() => { setModalVisible(true) }}>
          <TextInput
            placeholder='Search Store'
            style={styles.Search}
            // value={search}
            // onChangeText={() => setSearch(text)}
            onPressIn={() => { setModalVisible(true) }}
          />
          <EvilIcons style={{ position: 'absolute', top: '40%', left: '2%' }} name="search" size={24} color="black" />
        </TouchableWithoutFeedback>
        <FlatList
          style={{ paddingHorizontal: 10 }}
          data={list}

          renderItem={renderItem}
          keyExtractor={(item) => `key-${item.id}`}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <Modal
          animationType='slide'
          transparent={false}
          visible={modalVisible}
        >
          <View style={styles.modal}>
            <View style={styles.main}>
              <View style={styles.Header1}>
                <TouchableOpacity onPress={() => {setModalVisible(false)}}>
                <AntDesign name="arrowleft" size={24} color="black" style={{left: 0}} />
                </TouchableOpacity>
                <Text style={styles.TextHeader1}>Find Products</Text>
              </View>
              <TouchableWithoutFeedback style={styles.Body} onPress={() => { setModalVisible(true) }}>
              <TextInput
                placeholder='Search Store'
                style={styles.Search}
                value={search}
                onChangeText={text => { searchFilter(text) }}
              />
              <EvilIcons style={{ position: 'absolute', top: '40%', left: '2%' }} name="search" size={24} color="black" />
              </TouchableWithoutFeedback>
            </View>
              <FlatList
                style={{ marginTop: 20, paddingHorizontal: 45 }}
                data={filterSearch}
                renderItem={renderData}
                numColumns= {2}
                keyExtractor={(item, index) => index.toString()}
              />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
export default Explore;
const styles = StyleSheet.create({
  Header: {
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',

  },
  Header1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextHeader: {
    fontFamily: 'Gilroy-Light',
    fontSize: 16,
  },
  TextHeader1: {
    fontFamily: 'Gilroy-Light',
    fontSize: 16,
    marginRight: '33%'
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
  },
  modal: {
    flex: 1,
    marginTop: 20,

  },
  product: {

    width: cardWidth,
    borderRadius: 10,
    height: 250,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 5,
  },
  colum: {
    paddingHorizontal: 12,
  },
  title: {

    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    fontFamily: 'Gilroy-Light'
  },
  span: {

    paddingTop: 15,
    fontSize: 14,
    color: '#7C7C7C',
    fontFamily: 'Gilroy-Light'
  },
  price: {

    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItem: 'center'
  },
  numBerprice: {
    fontFamily: 'Gilroy-Light',
    fontSize: 16
  },
  button: {

    width: 40,
    height: 40,
    backgroundColor: '#53B175',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    width: 15,
    height: 15,
  },
  img: {

    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imge: {
    width: '100%',
    height: 120
  },
  cardPrice: {

    justifyContent: "center",
    alignItem: 'center'
  }
})