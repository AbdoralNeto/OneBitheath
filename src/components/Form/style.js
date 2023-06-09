import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    formConstext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:'#FFFFFF',
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:10,
        padding:10,
    },
    formLabel:{
        color:'#000000',
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:'#f6f6f6',
        height:40,
        margin:10,
        paddingLeft:10,
    },
    ButtonCalculatior:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:'#ff0043',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },
    textButtonCalculatior:{
        fontSize:20,
        color:'#ffffff',
    }
});

export default styles