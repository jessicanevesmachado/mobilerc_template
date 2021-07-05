import React from 'react'
import {Alert,TouchableOpacity,Text,StyleSheet,TouchableOpacityProps} from 'react-native'
import { theme } from '../config/theme';


interface ButtonProps extends TouchableOpacityProps{
    title:string;
}

export function Button({title, ...rest}:ButtonProps){
    return(
               <TouchableOpacity style={[styles.button,(rest.disabled?styles.disabled:styles.noDisabled)]} activeOpacity={0.7} {...rest}>
                    <Text style={styles.text}>
                      {title}
                    </Text>
                </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
       button: {
        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        paddingHorizontal:10, 
      
       },
       noDisabled:{
        backgroundColor:theme.color.secondary
       },
       disabled:{
        backgroundColor:theme.color.neutral
       },
       text:{
        color: 'white',
        fontSize:16,
        padding: 16,
         
       }
  });