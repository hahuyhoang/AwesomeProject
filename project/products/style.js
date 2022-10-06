import { StyleSheet, Dimensions, ImageBackgroundBase } from 'react-native'
const { width } = Dimensions.get("window");
const cardWidth = width / 2.5;
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        width: width,
    },
    colums: {

        // flex: 1,
        // width: '100%',
        // height: 150,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // alignItem: 'flex-end',
        // justifyContent: 'space-between',
    },
    product: {

        width: cardWidth,
        borderRadius: 10,
        height: 250,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff',
        marginBottom: 10,
        elevation: 5,
    },
    colum: {
        paddingHorizontal: 12,
    },
    title: {

        fontSize: 16,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy-Light'
    },
    span: {

        paddingTop: 15,
        fontSize: 14,
        color: '#7C7C7C',
        fontFamily: 'Gilroy-Light'
    },
    price: {

        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItem: 'center'
    },
    numBerprice: {
        fontFamily: 'Gilroy-Light',
        fontSize: 16
    },
    button: {

        width: 40,
        height: 40,
        backgroundColor: '#53B175',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        width: 15,
        height: 15,
    },
    img: {

        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    imge: {
        width: '100%',
        height: 120
    },
    cardPrice: {

        justifyContent: "center",
        alignItem: 'center'
    }


})
export default styles;