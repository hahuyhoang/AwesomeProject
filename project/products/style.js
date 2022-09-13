import { StyleSheet ,Dimensions, ImageBackgroundBase} from 'react-native'
import { Colors ,} from 'react-native/Libraries/NewAppScreen';
const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 25;
const styles = StyleSheet.create({
    wrap:{
        flex:6,
        width:'100%',
    },
    colums:{
        flex:1,
        width:'100%',
        height:220,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItem:'flex-end',
        justifyContent:'space-between',
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
        paddingHorizontal:10,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:'#181725'
    },
    span:{
        fontSize:14,
        color:'#7C7C7C'
    },
    price:{
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItem:'center'
    },
    button:{
        width:35,
        height:35,
        backgroundColor:'#53B175',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        width:15,
        height:15,
    },
    img:{
        width:'100%',
        height:200,
    }
  
    
})
export default styles;