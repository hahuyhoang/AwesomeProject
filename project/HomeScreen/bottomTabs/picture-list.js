import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image,Dimensions } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'

const {width: screenWidth} = Dimensions.get('window')


const PictureList = () => {
    const [imgList, setImgList] = useState([]);
    const stepCarousel = useRef({});

    useEffect(() => {
        const data = [
            {
                image: <Image key={'0'} source={require('../../images/banner.png')} style={styles.ImgLists}/>
            },
            {
                image: <Image key={'1'} source={require('../../images/banner.png')} style={styles.ImgLists1}/>
            },
            {
                image: <Image key={'2'} source={require('../../images/banner.png')} style={styles.ImgLists2}/>
            },

        ];
        setImgList(data);
    }, [])
    // let index = 0;
    // let length = imgList.length;
    // useEffect(() =>{
    //     if(length > 0){
            
    //         console.log('==========================a==========');
    //         console.log(length);
    //         console.log('====================================');
    //         setInterval(() => {
    //             // console.log('count:' + (index));
    //             // stepCarousel.current.scrollTo({x: index * 350, y: 0, animated: true});
    //             index += 1;
    //             if(length == index){
    //                 index = 0;
    //             }
    //         }, 5000)
    //     }
    // },[imgList])
  return (
    <SafeAreaView>
        <View>
            <View style={{width: screenWidth ,height: 150}}>
                <ScrollView
                horizontal
                pagingEnabled
                contentContainerStyle={{
                    width: screenWidth * imgList.length, height: 150
                }}
                // ref={stepCarousel}
                >
                    {imgList.map( e => e.image)}
                </ScrollView>
                </View>
        </View>
    </SafeAreaView>
  )
}

export default PictureList;

const styles = StyleSheet.create({
    ImgLists: {
        width: screenWidth ,
        height: 130,
        resizeMode:'cover'
        
    },ImgLists1:{
        width: screenWidth,
        height: 130,
        resizeMode:'cover'
    },
    ImgLists2:{
        width: screenWidth ,
        height: 130,
        resizeMode:'cover'
    }
})