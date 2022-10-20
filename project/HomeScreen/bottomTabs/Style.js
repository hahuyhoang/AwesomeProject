import { StyleSheet, Dimensions } from 'react-native'
const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
// ............MyCart............
CartTop:{
  width:'100%',
    justifyContent:'center',
    alignItems:'center',  
    borderBottomWidth :1,
    paddingVertical:20,
    borderColor:'#E2E2E2',
  },
  remove:{
    position:'absolute',
    right:20,
    top:20
  },
  CartText:{
      fontSize:18,
      fontWeight:'600'
  },
  btContainer:{
    flex: 1,
    backgroundColor: '#fff'
  },
  
  CartProduct:{
      height:140,
      flexDirection:'row',
      width:'100%',
    //   justifyContent:'space-between',
      borderBottomWidth:1,
      borderColor:'#E2E2E2',
  },
  ProductName:{
      fontSize:16,
      fontWeight:'600'
  },
  Price:{
      paddingVertical:10,
      paddingLeft:'8%',
      width:'55%'
  },
  CartImage:{
      resizeMode: 'stretch',
      width: '25%',
      justifyContent:'center',
      alignItems:'center', 
  },
  Productnumber:{
      paddingVertical:15,
      flexDirection:'row',
  },
  Number:{
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:10,
      
  },
  productAdd:{
      width:40,
      height:40,
      borderWidth:1,
      borderRadius:15,
      alignItems:'center',
      borderColor:'#E2E2E2',
      justifyContent:'center'
  },
  ProductPrice:{
    width:'20%'
  },    
  ProductText:{
      paddingVertical:5,
      color:"#B3B3B3",
  },
  productDelete:{
    //   height:'10%',
      paddingHorizontal:25,
      paddingVertical:10
  },
  PriceName:{
      paddingTop:'50%',
      alignItems:'center',
      justifyContent:'center'
  },
  botton:{
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
  },
  CkeckCart:{
      position:'relative',
      width:'90%',
      height:60,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
      backgroundColor:'#53B175',
      marginBottom:20,
  },
  TexBtn:{
      color:'#fff',
      fontSize:16,
      fontWeight:'600',
  },
  bottonPrice:{
      right:'7%',
      position:"absolute",
      padding:2,
      borderRadius: 6,
      backgroundColor:'#489E67',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
// .............ProductFavorurite..............
ProductPriceName:{
    width: '55%',
    justifyContent:'center',
    paddingLeft:'10%'
},
ProductFavourite:{
    width: '30%',
    flexDirection:'flex',
    alignItems:'center',
    justifyContent:'center',
},
ProductNext:{
    paddingLeft:10
},
CartProductRow:{
    height:120,
    flexDirection:'row',
    width:'100%',
    borderBottomWidth:1,
    borderColor:'#E2E2E2',
},
// ...............Account.............
AccountMain:{
   
    height:110,
    flexDirection:'row',
    alignItems:'center',
    borderColor:"#E2E2E2",
    borderBottomWidth:1,
    paddingHorizontal:20,
},
AccountInfo:{
    flexDirection:'row',
},
AccountInfoUser:{
    paddingLeft:20,
},
UserName:{
    fontSize:16,
    fontWeight:'600',
    color:'#000',
},
GmailUser:{
    color:'#7C7C7C',
    paddingVertical:3,
},
MainUser:{
    paddingHorizontal:20,
    flex:1,
},
InfoUser:{
    height:53,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderColor:"#E2E2E2",
    borderBottomWidth:1,
},
ListInfo:{
    flexDirection:'row',
    alignItems:'center',
},
TextInfo:{
    fontSize:16,
    fontWeight:'600',
    paddingLeft:16,
},
Botton:{
    position:'relative',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
},
BtnOut:{
    position:'relative',
    width:'90%',
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:'#F2F3F2',
    marginTop:20,

},
BtnText:{
    fontSize:16,
    fontWeight:'600',
    color:'#53B175',
},
btnIcon:{
    position:'absolute',
    left:'10%',
    top: 40,
    zIndex:1,
},
wrap:{
    
    padding: 20,
    margin: 20,
    borderRadius: 8,
    backgroundColor: '#2d3953',
    shadowColor: '#4048bf',
    shadowOffset:{
        width: 8.4,
        height: 8.4
    },
    shadowOpacity: 0.74,
    shadowRadius: 30,
    elevation: 10,
    flex: 1
},
modalView1: {
    // flex: 1,
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: '80%',
    height: '75%',
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    // position: 'relative',
},
button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
},
buttonOpen: {
    backgroundColor: "#F194FF",
},
buttonClose: {
    backgroundColor: "#2196F3",
},
textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
},
modalText: {
    marginBottom: 15,
    textAlign: "center"
},
close: {

    // flex: 1,
    top: 0,
    // marginTop: "-15%",
    marginLeft: '5%'
},
btnClose: {
    flex: 1,
    top: '2%',
    // position: 'absolute'
},

TextError: {
    fontFamily: 'Gilroy-Light',
    fontSize: 25,
    marginBottom: 5
},

miniText: {
    fontFamily: 'Gilroy-Medium'
},
doneOrder:{
    fontFamily: 'Gilroy-Light',
    fontSize: 20,
    color: '#fff'
},
ClickOrder:{
    borderWidth: 1,
    width: '90%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#53b175',
    borderColor: '#53b175'
},
doneOrder1: {
    paddingTop: 20,
    fontSize: 20,
    fontFamily: 'Gilroy-Light'
},
// =========================
container:{
    flex: 4,
    marginHorizontal: 15,
    height: height / 2,
    marginTop: 15
  },
  topheader:{
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: '#e7e7e7'

  },
  flexRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textHeader:{
    fontSize: 18,
    fontFamily: 'Gilroy-Light',
    marginBottom: 20,
    marginHorizontal: 15
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  FavouritePrice:{
    width:'10%',
  },
  textBody:{
    fontSize: 15,
    color: '#7c7c7c',
    marginBottom: '2%',
    marginTop: '1%',
    fontFamily: "Gilroy-Light"
  },
  Body:{
    marginTop: 10,
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  text:{
    fontFamily: 'Gilroy-Light'
  },
  textService:{
    color: '#7c7c7c',
    fontFamily: 'Gilroy-Light'
  },
  placeOder:{
    borderWidth: 1,
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#53b175',
    borderColor: '#53b175'
  },
  textOder:{
    color: '#fff',
    fontFamily: 'Gilroy-Light',
    fontSize: 15
  },
  //========================
  modalView2:{
     // flex: 1,
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: '100%',
    height: '65%',
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    // position: 'relative',
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    // marginTop: 22,
    shadowOpacity: 0.25
},

})





export default styles;