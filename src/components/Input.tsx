import React from 'react'
import {StyleSheet, TextInput} from 'react-native'
import { theme } from '../config/theme';


 
export function Input({ ...rest}:any){
    return(
               <TextInput {...rest} style={styles.input}> 
               </TextInput>
    )
}

const styles = StyleSheet.create({
    
       input: { 
           color: 'black',
           fontSize:14,
           backgroundColor:'white',
           borderRadius:5,
           width: '100%',
           height: 48,
           borderWidth:1,
           borderColor:'#ced4da'
       }
  });