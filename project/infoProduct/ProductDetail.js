
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React ,{ useEffect, useState, useRef } from 'react'
import Rating from '../HomeScreen/Rating';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const {width: screenWidth} = Dimensions.get('screen')




    

export default function ProductDetail({navigation}) {
    const [imgList, setImgList] = useState([]);
    const stepCarousel = useRef({});

    useEffect(() => {
        const data = [
            {
                image: <Image key={'0'} source={require('../images/apple1.png')} resizeMode='contain' style={{width: screenWidth, height: '100%'}}/>
            },
            {
                image: <Image key={'1'} source={require('../images/apple1.png')} resizeMode='contain' style={{width: screenWidth, height: '100%'}}/>
            },
            {
                image: <Image key={'2'} source={require('../images/apple1.png')} resizeMode='contain' style={{width: screenWidth, height: '100%'}}/>
            },
    
        ];
        setImgList(data);
    }, [])

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
        <View>
            <View style={{marginTop: 25, alignItems: 'center', width: screenWidth,}}>
                <ScrollView
                horizontal
                pagingEnabled
                contentContainerStyle={{
                    width: screenWidth * imgList.length, height: 140
                }}
                // ref={stepCarousel}
                >
                    {imgList.map( e => e.image)}
                </ScrollView>
                </View>
                <View style={{position: 'absolute', right: 0}}>
                <Ionicons name="ios-share-outline" size={24} color="black" />
                </View>
                <TouchableOpacity style={{position: 'absolute'}} onPress={() => {navigation.navigate('HomeScreen')}}>
                <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <View style={styles.topTitle}>
                <View style={styles.LeftTitle}>
                <Text style={styles.bigText}>Naturel Red Apple</Text>
                <Text style={styles.miniText}>1kg, Price</Text>
                </View>
                <View>
                <EvilIcons name="heart" size={24} color="black" style={styles.rightIcon}  /> 
                </View>
            </View>
            <View style={styles.TopBody} >
                <View style={styles.LeftItem}>
                    <AntDesign name="minus" size={24} color="black" />
                    <View style={styles.number}>
                    <Text style={styles.numbers} > 1</Text>
                    </View>
                    <AntDesign name="plus" size={24} color="black" />
                </View>
                <View>
                    <Text style={styles.Price} >$4.99</Text>
                </View>
            </View>
            <View>
                <View style={styles.TopContent}>
                    <View style={styles.TopTitle} >
                        <Text style={styles.TitleTop}>Product Detail</Text>
                    </View>
                    <View>
                        <FontAwesome name="angle-down" size={24} color="black" />
                    </View>
                </View>
                    <View style={{marginTop: 20,marginBottom: 20}}>
                        <Text style={styles.textDetail}>Apples Are Nutritious. Apples May Be Good For Weight Loss.</Text>
                        <Text style={styles.textDetails}>Apples May Be Good For Your Heart. As Part Of A Healtful And Varied Diet</Text>
                    </View>

                <View style={styles.Nutriti}>
                    <View>
                        <Text style={styles.TextNutri}>Nutritions</Text>
                    </View>
                    <View style={styles.gram}>
                        <Text style={{fontFamily: 'Gilroy-Light',color: '#7c7c7c'}} >100gr</Text>
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
    container:{
        marginHorizontal: 19,
        marginTop: 30,
        
    },
    topTitle:{
        flexDirection: 'row',
        
        
    },
    LeftTitle:{
        width: '97%'
    },
    rightIcon:{
        width: 23,
        height: 17
    },
    bigText:{
        fontFamily: 'Gilroy-Light',
        fontSize: 18
    },
    miniText:{
        fontFamily: "Gilroy-Light",
        color: '#7c7c7c',
        
    },
    TopBody:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        marginTop: 14
    },
    number:{
        borderWidth: 1,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 11,
        marginHorizontal: 13,
        borderColor: '#e0e0e0'
    },
    numbers:{
        paddingRight: 5, 
        fontFamily: 'Gilroy-Light'
    },
    LeftItem:{
        // width: '89%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,

    },
    Price:{
        fontFamily: 'Gilroy-Light',
        
    },
    TopContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 19,
    },
    TitleTop:{
        fontFamily: 'Gilroy-Light'
    },
    textDetail:{
        fontFamily: 'Gilroy-Light',
        color: '#7c7c7c',
        fontSize: 11,
        lineHeight: 18,
        
    },
    textDetails:{
        fontFamily: 'Gilroy-Light',
        color: '#7c7c7c',
        fontSize: 11,
        lineHeight: 18,
    },
    Nutriti:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 15,
        borderColor: '#e0e0e0'
    },
    TextNutri:{
        fontFamily: 'Gilroy-Light'
    },
    gram:{
        fontFamily: 'Gilroy-Light',
        backgroundColor: '#ebebeb',
        borderRadius: 8,
        width: 45,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Review:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    FooterText:{
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#53B175',
        borderColor: '#53B175',
        padding: 18,
        borderRadius: 13 
    },
    Textfoot:{
        color: '#fff',
        fontFamily: 'Gilroy-Light'
    }
    
})