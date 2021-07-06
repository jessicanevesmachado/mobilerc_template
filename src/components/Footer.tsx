import React, {useEffect,useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {SvgXml} from 'react-native-svg'
import { theme } from '../config/theme';
import { anfora, upArrow } from './svg/icones';

export function Footer(){  

    return(
        <View style={styles.footer}>
            <View style={styles.anfora}><SvgXml xml={anfora}  /></View>
            <View style={styles.upArrow}>
               <TouchableOpacity style={styles.arrow} activeOpacity={0.7}>
                    <SvgXml xml={upArrow}  />
                    <Text style={styles.upArrowText}>Início</Text>
               </TouchableOpacity>
            </View>
       </View>
    )
}


const styles = StyleSheet.create({
  
    footer:{
        height: 82, 
        backgroundColor: theme.color.primary,
        flexDirection:'row'
    },
    anfora:{ 
        width: '50%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    upArrow:{ 
        width: '50%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:20  
    },
    arrow:{ 
        justifyContent:'center',
        alignItems:'center' 
    },
    upArrowText:{
        fontSize:16,
        fontFamily:theme.font.regular,
        color: 'white'
    }


  });