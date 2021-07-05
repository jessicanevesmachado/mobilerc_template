import React, {useEffect,useState} from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import {SvgXml} from 'react-native-svg'
import { theme } from '../config/theme';
import { anfora } from './svg/anfora';

export function Footer(){  

    return(
        <View style={styles.footer}>
            <SvgXml xml={anfora}  />
       </View>
    )
}


const styles = StyleSheet.create({
  
    footer:{
        height: 82, 
        backgroundColor: theme.color.primary,
        alignItems: 'center',
        justifyContent: 'center',
      } 

  });