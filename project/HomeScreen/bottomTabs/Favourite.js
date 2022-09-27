import * as React from 'react';
import { Button,Image, SafeAreaView,Text,ScrollView, View,TouchableOpacity, Pressable, Modal} from 'react-native';
import styles from'./Style'
import ProductFavoruite from './ProductFavoruite';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

function Favourite({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
      <View style={styles.CartTop}>
        <Text style={styles.CartText}>Favorites</Text>                    
      </View>
      <View style={{flex:1,}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      style={{marginHorizontal:20, }}>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
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
                    style={{backgroundColor: 'rgba(00,00,00,.5)', flex: 1}}
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
                            <View style={{ alignItems: 'center', marginTop: 20, flex: 1}}>
                                <View style={{ alignItems: 'center', }}>
                                    <Text style={styles.TextError}>
                                        Oops! Order Failed
                                    </Text>
                                    <Text style={styles.miniText}>Something went tembly wrong</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <View style={{ alignItems: 'center'}}>
                                    <TouchableOpacity style={styles.ClickOrder}>
                                        <View>
                                            <Text style={styles.doneOrder}>Please Try Again</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View>
                                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
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