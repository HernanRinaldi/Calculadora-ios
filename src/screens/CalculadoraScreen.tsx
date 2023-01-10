import React from 'react'
import { View, Text } from 'react-native';
import BotonCalculadora from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = (  ) => {
    const{ 
        numero,
        numeroAnterior,
        positivoNegativo,
        armarNumero,
        eliminar,
        limpiar,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora()

  return (
    
        <View style={styles.calculadoraContainer} >
            {
                (
                    (numeroAnterior !== '0') && (
                        <Text style={ styles.resultadoPequeño } > { numeroAnterior } </Text>
                    )
                )
            }

            <Text 
            style={ styles.resultado } 
            numberOfLines={1}  
            adjustsFontSizetoFit
             > { numero } </Text>
 
            <View style={styles.botonFila} >
            <BotonCalculadora texto='C'  color='#9B9B9B'  accion= { limpiar } />
            <BotonCalculadora texto='+/-'  color='#9B9B9B' accion= { positivoNegativo } />
            <BotonCalculadora texto='del'  color='#9B9B9B' accion= { eliminar } />
            <BotonCalculadora texto='/'  color='#FF9427' accion= { btnDividir } />
            </View>

            <View style={styles.botonFila} >
            <BotonCalculadora texto='7' accion={  armarNumero } />
            <BotonCalculadora texto='8' accion={  armarNumero } />
            <BotonCalculadora texto='9' accion={  armarNumero } />
            <BotonCalculadora texto='x'  color='#FF9427' accion= { btnMultiplicar } />
            </View>

            <View style={styles.botonFila} >
            <BotonCalculadora texto='4' accion={  armarNumero } />
            <BotonCalculadora texto='5' accion={  armarNumero } />
            <BotonCalculadora texto='6' accion={  armarNumero } />
            <BotonCalculadora texto='-'  color='#FF9427' accion= { btnRestar } />
            </View>

            <View style={styles.botonFila} >
            <BotonCalculadora texto='1' accion={  armarNumero } />
            <BotonCalculadora texto='2' accion={  armarNumero } />
            <BotonCalculadora texto='3' accion={  armarNumero } />
            <BotonCalculadora texto='+'  color='#FF9427' accion= { btnSumar } />
            </View>

            <View style={styles.botonFila} >
            <BotonCalculadora texto='0' ancho={true} accion={  armarNumero } />
            <BotonCalculadora texto='.' accion={  armarNumero } />
            <BotonCalculadora texto='='  color='#FF9427' accion= { calcular } />
            </View>

        </View>
  )
}

export default CalculadoraScreen;

