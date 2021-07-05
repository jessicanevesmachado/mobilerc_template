import React from 'react'
import {StyleSheet, Text} from 'react-native'
import { theme } from '../config/theme';


 
export function Label({value}:any){
    return(
               <Text style={styles.text}> 
                {value}
               </Text>
    )
}

const styles = StyleSheet.create({
    
    text: { 
           color: 'black',
           fontSize:14,
           fontFamily:theme.font.regular
       }
  });