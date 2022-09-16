import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardProducts = () => {
  return (
    // <View style={styles.container}>
    //     <View style={styles.body}>
            <ScrollView
            >
                <View  style={{flexDirection: 'row'}}>
                    <View style={styles.proDuct}>
                    <Image style={styles.image} source={require('../../../images/card-ProDucts.png')} />
                    <Text style={styles.text}>Pulses</Text>
                    </View>
                    <View style={styles.proDuct1}>
                    <Image style={styles.image} source={require('../../../images/ProDucts-1.png')} />
                    <Text style={styles.text}>Rice</Text>
                    </View>
                    <View style={styles.proDuct1}>
                    <Image style={styles.image} source={require('../../../images/ProDucts-1.png')} />
                    <Text style={styles.text}>Rice</Text>
                    </View>
                </View>
                </ScrollView>
    //     </View>
    // </View>
  )
}

export default CardProducts;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
        marginHorizontal: 20
    },
    body:{ 
        flex: 1,

    },
    proDuct:{
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        borderRadius: 15,
        backgroundColor: '#fef1e4',
        borderColor: '#fef1e4',
        fontFamily: 'Gilroy-Light',
        
    },
    proDuct1:{
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        borderRadius: 15,
        backgroundColor: '#e5f3ea',
        borderColor: '#e5f3ea',
        // marginLeft: 20,
        fontFamily: 'Gilroy-Light'
    },
    text:{
        fontFamily: 'Gilroy-Light',
        fontSize: 15,
        marginLeft: 15
    },
    image:{
        marginHorizontal: 15
    }
})