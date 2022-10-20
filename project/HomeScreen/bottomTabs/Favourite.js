import React, { useEffect, useContext, useState } from 'react';
import { Button, Image, SafeAreaView, Text, ScrollView, View, TouchableOpacity, Pressable, Modal } from 'react-native';
import styles from './Style'
import { Entypo } from '@expo/vector-icons';
import ProductFavoruite from './ProductFavoruite';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../../context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
function Favourite({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
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
        AsyncStorage.getItem('mycart')
            .then((cart) => {
                if (cart !== null) {
                    const cartfood = JSON.parse(cart)
                    setState({
                        dataCart: cartfood
                    })
                }
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => setIsLoading(false))
    }
    // const AddCart = (infoProduct)=>{
    //     const itemfavorite = {
    //       id: infoProduct.id,
    //       quantity:1,
    //       image:infoProduct.media.url,
    //       name:infoProduct.name,
    //       title:infoProduct.title,
    //       price: infoProduct.price
    //     }
    //     AsyncStorage.getItem('mycart').then((datacart)=>{
    //         if (datacart !== null) {
    //           const mycart = JSON.parse(datacart)
    //           mycart.push(itemfavorite)
    //           AsyncStorage.setItem('mycart',JSON.stringify(mycart));
    //         }
    //         else{
    //           const mycart  = []
    //           mycart.push(itemfavorite)
    //           AsyncStorage.setItem('mycart',JSON.stringify(mycart));
    //         }
    //         alert("Add Favorite")
    //       })
    //       .catch((err)=>{
    //         console.log(err)
    //       })
      
    const Delete = ()=>{
        AsyncStorage.removeItem('mycart')
       .then(()=>{
           setState({dataCart:[]})
         })
         .catch((err)=>{
           console.log(err)
         })
   
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
           <View style={{flexDirection:'row',position:'relative'}}>
                <View style={styles.CartTop}>
                    <Text style={styles.CartText}>Favorites</Text>
                </View>
                <TouchableOpacity  style={styles.remove}
                onPress={()=>
                    Delete()
                }
                >
                    <MaterialCommunityIcons name="delete-sweep" size={24} color="black" />
                 </TouchableOpacity>
            </View>
            <View style={{ flex: 1, }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: 20, }}>
                    {isLoading ? <Text></Text> : state.dataCart.map((infoProduct) => {
                        return (
                            <SafeAreaView style={{ flex: 1, }}>
                                <View style={styles.CartProductRow}>
                                    <View style={styles.CartImage}>
                                        <Image style={{ width: '100%', height: '80%' }} resizeMode={"contain"} source={{ uri: `${userInfo.url}/${infoProduct.image}` }} />
                                    </View>
                                    <View style={styles.ProductPriceName}>
                                        <Text style={styles.ProductName}>{infoProduct.name}</Text>
                                        <Text style={styles.ProductText}>{infoProduct.title}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center',width:'100%' }}>
                                        <View style={styles.FavouritePrice}>
                                            <Text style={{ fontWeight: 'bold', fontFamily: 'Gilroy-Light' }}>${infoProduct.price}</Text>
                                        </View>
                                    
                                        <TouchableOpacity style={styles.ProductNext}>
                                            <Entypo name="chevron-right" size={24} color="black" />

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </SafeAreaView>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.botton}>
                <TouchableOpacity style={styles.CkeckCart} onPress={() => setModalVisible(true)}>
                    <Text style={styles.TexBtn}>Add All to Cart</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
                style={{ backgroundColor: 'rgba(00,00,00,.5)', flex: 1 }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView1}>
                        <View style={styles.btnClose} >
                            <Pressable style={styles.close} onPress={() => setModalVisible(!modalVisible)}>
                                <Ionicons name="close" size={24} color="black" />
                            </Pressable>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../../images/image_13.png')} />
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20, flex: 1 }}>
                            <View style={{ alignItems: 'center', }}>
                                <Text style={styles.TextError}>
                                    Oops! Order Failed
                                </Text>
                                <Text style={styles.miniText}>Something went tembly wrong</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.ClickOrder}>
                                    <View>
                                        <Text style={styles.doneOrder}>Please Try Again</Text>
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity onPress={() => { 
                                        navigation.navigate('HomeScreen') }}>
                                        <Text style={styles.doneOrder1}>Back to home</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
export default Favourite;