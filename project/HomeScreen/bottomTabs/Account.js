import * as React from 'react';
import { Button,Image, SafeAreaView,Text,ScrollView, View,TouchableOpacity} from 'react-native';
import styles from'./Style'
import ProductCart from './ProductCart';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay'

function Account({ navigation }) {
  const { userInfo, isLoading, logout,email} = React.useContext(AuthContext)
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
      <View style={styles.AccountMain}>
        <Image source={require('../../images/user_1.png')} />
        <View style={styles.AccountInfoUser}>
          <View style={styles.AccountInfo} >
            <Text style={styles.UserName}>{userInfo.user.name}</Text>
            <TouchableOpacity style={{paddingLeft:8}}>
              <Image  source={require('../../images/pen.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.GmailUser}>{userInfo.user.email}</Text>
        </View>
      </View>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      >
      <View style={styles.MainUser}>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
          <Feather name="shopping-bag" size={24} color="black" />
            <Text style={styles.TextInfo}>Orders</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Entypo name="chevron-right" size={24} color="black" /> 
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
          <AntDesign name="idcard" size={24} color="black" />
            <Text style={styles.TextInfo}>My Details</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Entypo name="chevron-right" size={24} color="black" /> 
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
          <SimpleLineIcons name="location-pin" size={24} color="black" />
            <Text style={styles.TextInfo}>Delivery</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Entypo name="chevron-right" size={24} color="black" /> 
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
          <Octicons name="credit-card" size={24} color="black" />
            <Text style={styles.TextInfo}>Paymant Methods</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Entypo name="chevron-right" size={24} color="black" /> 
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Entypo name="ticket" size={24} color="black" />
            <Text style={styles.TextInfo}>Promo Cord</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Entypo name="chevron-right" size={24} color="black" /> 
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
          <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={styles.TextInfo}>Notifecations</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Entypo name="chevron-right" size={24} color="black" /> 
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Ionicons name="ios-help-circle-outline" size={24} color="black" />
            <Text style={styles.TextInfo}>Help</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Entypo name="chevron-right" size={24} color="black" /> 
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <AntDesign name="exclamationcircleo" size={20} color="black" />
            <Text style={styles.TextInfo}>About</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Entypo name="chevron-right" size={24} color="black" /> 
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Botton} onPress={logout}>
        <View style={styles.btnIcon}>
          <Image  source={require('../../images/out.png')} />
        </View>
        <View style={styles.BtnOut}>
          <Spinner visible={isLoading} />
          <Text style={styles.BtnText} >Log Out</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Account;