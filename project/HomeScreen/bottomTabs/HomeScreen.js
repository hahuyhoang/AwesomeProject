import * as React from 'react';
import { Button, Text, View, Image, StyleSheet, TextInput, ScrollView, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import Product from '../../products/product';
import PictureList from './picture-list';

const {WIDTH, HEIGHT} = Dimensions.get('window')

function HomeScreen({ navigation }) {



<Animated.View style= {styles.header}>
  <View style={styles.bar}>
  <View style={styles.buttonSearch}>
            <TextInput style={styles.searchProducts} placeholder='Search Store' />
            <Image style={styles.iconsearch} source={require('../../images/search.png')} />
          </View>
  </View>
</Animated.View>
  return (
    <View style={styles.mains}>
      <View style= {styles.container}>
      <ScrollView >
        <View style={styles.topIcon}>
          <View style={styles.Img}>
            <Image style={styles.logo} source={require('../../images/Group.png')} />
            <Text style={styles.text}>Dhaka, Banassre</Text>
          </View>
          <View style={styles.buttonSearch}>
            <TextInput style={styles.searchProducts} placeholder='Search Store' />
            <Image style={styles.iconsearch} source={require('../../images/search.png')} />
          </View>
          
            <View style={styles.slider}>
            <PictureList  style={styles.sliders}/>
            </View>
          <View style={styles.listProducts}>
            <View style={styles.offer}>
              <View style={styles.textLeft}>
              <Text style={styles.bigText}>Exclusive Offer</Text>

              </View>
              <View style={styles.textRight}>
              <Text style={styles.miniText} onPress={() => {navigation.navigate('ListProDucts')}}>See all</Text>
              </View>
            </View>
            <View>
              <ScrollView 
              horizontal>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
              
                
              </ScrollView>
            </View>
              
            </View>
            <View style={styles.listProducts}>
            <View style={styles.offer}>
              <View style={styles.textLeft}>
              <Text style={styles.bigText}>Best Selling</Text>
              </View>
              <View style={styles.textRight}>
              <Text style={styles.miniText} onPress={() => {navigation.navigate('ListProDucts')}}>See all</Text>
              </View>
            </View>
            <View>
              <ScrollView 
              horizontal>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
              </ScrollView>
            </View>
              
            </View>
            <View style={styles.listProducts}>
              <View style={styles.offers}>
                <View style={styles.textLeft}>
                <Text style={styles.bigText}>Groceries</Text>
                </View>
                <View style={styles.textRight}>
                <Text style={styles.miniText} onPress={() => {navigation.navigate('ListProDucts')}}>See all</Text>
                </View>
              </View>
              <ScrollView
              horizontal
              style={styles.cardProducts}>
                  <TouchableOpacity>
                    <View style={styles.proDuct}>
                    <Image style={styles.image} source={require('../..//images/card-ProDucts.png')} />
                    <Text style={styles.text}>Pulses</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.proDuct1}>
                    <Image style={styles.image} source={require('../../images/ProDucts-1.png')} />
                    <Text style={styles.text}>Rice</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.proDuct1}>
                    <Image style={styles.image} source={require('../../images/ProDucts-1.png')} />
                    <Text style={styles.text}>Rice</Text>
                    </View>
                  </TouchableOpacity>
              </ScrollView>
            <View>
              <ScrollView 
              style={styles.cartGroceries}
              horizontal>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
                <View style={{paddingRight: 18}}>
                <Product />
                </View>
              </ScrollView>
            </View>
              
            </View>
            
          
      </View>
          </ScrollView>
      <View style={styles.main}></View>
      </View>
    </View>
  );
}
export default HomeScreen;


const styles = StyleSheet.create({
  mains:{
    flex: 1,
    
    backgroundColor: '#fff'
  },
  container:{
    flex: 1,
    marginTop: 35,
    marginHorizontal: 20,
  },
  Img:{
    alignItems: 'center',
    // height: 70,
    
  },
  topIcon:{

  },
  main:{
    flex: 1,
    // backgroundColor:'#ccc'
  },
  text:{
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Gilroy-Light'
  },
  logo:{
    width: 45,
    resizeMode: 'stretch',
    
  },
  local:{
    marginTop: 10,
    
  },
  searchProducts:{
    borderWidth: 1,
    backgroundColor: '#F2F3F2',
    paddingHorizontal: 40,
    borderRadius: 10,
    borderColor: '#F2F3F2',
    height: 50,
    fontFamily: 'Gilroy-Light'
  },
  iconsearch:{
    position: 'absolute',
    marginHorizontal: 10
  },
  buttonSearch:{
    justifyContent:'center',
    marginTop: 20
  },
  slider:{
    marginTop: 20,
    width: WIDTH,
    height: HEIGHT
  },
  offer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    
    
    
  },
  offers:{
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  textLeft:{
    width: '85%'
  },
  miniText:{
    color: '#53B175',
    fontFamily: 'Gilroy-Light'
  },
  bigText:{
    fontSize: 18,
    fontFamily: 'Gilroy-Light'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    
  },
  listProducts:{
    flex: 1,
    marginTop: 15,
    
    
  },
  cardProducts:{
    marginBottom: 20,
    marginTop: 20
  },
  cartGroceries:{
    
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
    marginRight: 15
    
},
proDuct1:{
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    borderRadius: 15,
    backgroundColor: '#e5f3ea',
    borderColor: '#e5f3ea',
    fontFamily: 'Gilroy-Light',
    marginRight: 15

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