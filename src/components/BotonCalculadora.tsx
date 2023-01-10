import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface fila1 {
    texto:string,
    color?:string,
    ancho?:boolean,
    accion: ( numeroTexto:string ) => void;
}

const BotonCalculadora = ( {texto, color = '#2D2D2D', ancho= false, accion}: fila1 ) => {
  return (
    
    <TouchableOpacity onPress={ ()=> accion( texto ) } >
            <View style={{
                ...styles.boton,
                backgroundColor:color,
                width: ( ancho )? 180 : 80
                }} >
                <Text style={{
                    ...styles.botonTexto,
                    color:( color === '#9B9B9B' ) ? 'black' : 'white'
                    }} > {texto} </Text>
            </View>
    </TouchableOpacity> 
    
  )
}

export default BotonCalculadora;

