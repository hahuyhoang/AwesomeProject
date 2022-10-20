import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef, useContext } from 'react'
import Rating from '../HomeScreen/Rating';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



const { width: screenWidth } = Dimensions.get('screen')

export default function ProductDetail({ route, navigation }) {
    const [imgList, setImgList] = useState([]);
    const stepCarousel = useRef({});
    const [infoProduct, setInfoProduct] = useState({})
    const { listproduct, userInfo } = useContext(AuthContext)
    const [img, setImg] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [state, setState] = useState({ dataCart: [] });
    let quantity = 1
    const AddFavourite = (infoProduct)=>{
      const itemfavorite = {
        id: infoProduct.id,
        quantity: 1,
        image:infoProduct.media.url,
        name:infoProduct.name,
        title:infoProduct.title,
        price: infoProduct.price
      }
      AsyncStorage.getItem('mycart').then((datacart)=>{
          if (datacart !== null) {
            const mycart = JSON.parse(datacart)
            mycart.push(itemfavorite)
            AsyncStorage.setItem('mycart',JSON.stringify(mycart));
          }
          else{
            const mycart  = []
            mycart.push(itemfavorite)
            AsyncStorage.setItem('mycart',JSON.stringify(mycart));
          }
          alert("Add Favorite")
        })
        .catch((err)=>{
          console.log(err)
        })
    }
    const onChangeQual = (i, type) => {
        AsyncStorage.removeItem('mycart')
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
     
    const ProductInfo = () => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/products/item/${route.params.paramKey}`,
            {
                headers: { Authorization: `Bearer ${userInfo.token}` }
            })
            .then((res) => {
                let infoProduct = res.data.data_product
                setInfoProduct(infoProduct), JSON.stringify(infoProduct)
                // console.log(infoProduct.media);
                // AsyncStorage.setItem(infoProduct)
                let img = infoProduct.media
                setImg(img), JSON.stringify(img)
            })
            .catch((e) => {
                console.log(e);

            })
    }
    useEffect(() => {
        const wait = navigation.addListener('focus', () => {
          ProductInfo();
        });
        setImgList(data);
        return wait;
      }, [])

    const data = [
        {
            image: <Image key={'0'} source={{ uri: `${userInfo.url}/${img.url}` }} resizeMode='contain' style={{ width: screenWidth, height: '100%' }} />
        },
        {
            image: <Image key={'1'} source={{ uri: `${userInfo.url}/${img.url}` }} resizeMode='contain' style={{ width: screenWidth, height: '100%' }} />
        },
        {
            image: <Image key={'2'} source={{ uri: `${userInfo.url}/${img.url}` }} resizeMode='contain' style={{ width: screenWidth, height: '100%' }} />
        },


    ];
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View>
                <View style={{ marginTop: 25, alignItems: 'center', width: screenWidth, }}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        contentContainerStyle={{
                            width: screenWidth * imgList.length, height: 140
                        }}
                        ref={stepCarousel}
                    >
                        {imgList.map(e => e.image )}
                    </ScrollView>
                </View>
                <View style={{ position: 'absolute', right: 0 }}>
                    <Ionicons name="ios-share-outline" size={24} color="black" />
                </View>
                <TouchableOpacity   style={{ position: 'absolute' }} onPress={() => {
                    
                     navigation.navigate('HomeScreen')
                      }}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.topTitle}>
                    <View style={styles.LeftTitle}>
                        <Text style={styles.bigText}>{infoProduct.name}</Text>
                        <Text style={styles.miniText}>{infoProduct.title}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> AddFavourite(infoProduct) }>
                            <EvilIcons name="heart" size={25} color="black" style={styles.rightIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.TopBody} >
                    <View style={styles.LeftItem}>
                        <TouchableOpacity
                        onPress={()=>
                            onChangeQual(i,true)
                        }
                        >
                            <AntDesign name="minus" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={styles.number}>
                            <Text style={styles.numbers} >{quantity}</Text>
                        </View>
                        <TouchableOpacity  onPress={()=>
                            onChangeQual(i,false)
                        }>
                            <AntDesign name="plus" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.Price} >${infoProduct.price}</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.TopContent}>
                        <View style={styles.TopTitle} >
                            <Text style={styles.TitleTop}>{infoProduct.description}</Text>
                        </View>
                        <View>
                            <FontAwesome name="angle-down" size={24} color="black" />
                        </View>
                    </View>
                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <Text style={styles.textDetail}>{infoProduct.description}</Text>
                        <Text style={styles.textDetails}>{infoProduct.description}</Text>
                    </View>

                    <View style={styles.Nutriti}>
                        <View>
                            <Text style={styles.TextNutri}>Nutritions</Text>
                        </View>
                        <View style={styles.gram}>
                            <Text style={{ fontFamily: 'Gilroy-Light', color: '#7c7c7c' }} >100gr</Text>
                        </View>

                    </View>
                    <View style={styles.Review}>
                        <View>
                            <Text style={styles.TextNutri}>Review</Text>
                        </View>
                        <View style={styles.startReview}>
                            <Rating />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.Footer}>
                    <View style={styles.FooterText} >
                        <Text style={styles.Textfoot}>Add To Basket</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginHorizontal: 19,
        marginTop: 30,
        backgroundColor: '#fff'

    },
    topTitle: {
        flexDirection: 'row',
    },
    LeftTitle: {
        width: '97%'
    },
    rightIcon: {
        width: 23,
        height: 17
    },
    bigText: {
        fontFamily: 'Gilroy-Light',
        fontSize: 18
    },
    miniText: {
        fontFamily: "Gilroy-Light",
        color: '#7c7c7c',

    },
    TopBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        marginTop: 14
    },
    number: {
        borderWidth: 1,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 11,
        marginHorizontal: 13,
        borderColor: '#e0e0e0'
    },
    numbers: {
        paddingRight: 5,
        fontFamily: 'Gilroy-Light'
    },
    LeftItem: {
        // width: '89%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,

    },
    Price: {
        fontFamily: 'Gilroy-Light',

    },
    TopContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 19,
    },
    TitleTop: {
        fontFamily: 'Gilroy-Light'
    },
    textDetail: {
        fontFamily: 'Gilroy-Light',
        color: '#7c7c7c',
        fontSize: 11,
        lineHeight: 18,

    },
    textDetails: {
        fontFamily: 'Gilroy-Light',
        color: '#7c7c7c',
        fontSize: 11,
        lineHeight: 18,
    },
    Nutriti: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 15,
        borderColor: '#e0e0e0'
    },
    TextNutri: {
        fontFamily: 'Gilroy-Light'
    },
    gram: {
        fontFamily: 'Gilroy-Light',
        backgroundColor: '#ebebeb',
        borderRadius: 8,
        width: 45,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Review: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    FooterText: {
        marginTop: '10%',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#53B175',
        borderColor: '#53B175',
        padding: 18,
        borderRadius: 13
    },
    Textfoot: {
        color: '#fff',
        fontFamily: 'Gilroy-Light'
    }

})