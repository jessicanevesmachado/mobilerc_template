import React, {useEffect,useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { theme } from '../config/theme';

export function Header(){  

    return(
        <View style={styles.header}>
          <Text style={styles.headerText}>OBOTICÁRIO</Text>
          <Text style={styles.headerText}>App da Consultora</Text>
       </View>
    )
}


const styles = StyleSheet.create({
  
    header: {
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:24,  
        marginTop:getStatusBarHeight(), 
      },

      headerText:{
          color: theme.color.primary,
          fontWeight:'500',
          fontFamily:theme.font.regular
      }

  });