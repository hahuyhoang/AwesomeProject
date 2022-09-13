import { StyleSheet ,Dimensions} from 'react-native'
import { Colors ,} from 'react-native/Libraries/NewAppScreen';
const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 25;
const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor:'#fff',
        paddingHorizontal:20,
    },
    container:{
        flex: 1,
        width: "100%",
    },
    top:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',

    },
    input:{
        position:'relative',
        backgroundColor:'#F2F3F2',
        width: '90%',
        height:45,
        paddingLeft:34,
        borderRadius:10,
        fontSize:14,
    },
    left:{
        position:'absolute',
        left:10,
    },
    close:{
        position:'absolute',
        right:45,
    },
    next:{
      paddingLeft:15 ,
    },

    wrap:{
        flex:6,
        width:'100%',
    },

    colums:{
        width:'100%',
        height:'100%',
        // flexDirection:'row',
        flexWrap:'wrap',
        alignItem:'flex-end',
        justifyContent:'space-between',
        // backgroundColor:'#ccc'
    },
    product:{
        width:cardWidth,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor:'#fff',
        marginBottom: 10,
        elevation:5,
    },
    colum:{
        paddingHorizontal:10
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:'#181725'
    },
    span:{
        fontSize:14,
        color:'#DEDEDE'
    },
    price:{
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:"space-between",
    },
    button:{
        width:30,
        height:30,
        backgroundColor:'#53B175',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        width:15,
        height:15,
    },
  
    
})
export default styles;