import { StyleSheet } from 'react-native';

 export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',
        paddingHorizontal:20,

    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBotton:10
    },
    resultadoPequeño:{
        color:'rgba(255,255,255,0.25)',
        fontSize:30,
        textAlign:'right'
    },
    boton:{
        width:80,
        height:80,
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10,
        marginTop:10,
        
    },
    botonTexto:{
        color:'white',
        fontSize:30,
        textAlign:'center',
        padding:10,
        fontWeight:'bold',
    },
    botonFila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBotton: 18,
        paddingHorizontal: 10
    }
});
