import React, {useState} from 'react'
import {
  Text,
  View,
} from 'react-native';
import stylesHome from './homeStyle';
 
export default function Home() {

  return ( <View style={{flex: 1, justifyContent:"center", alignItems:"center" }}>  
        
         <Text style={stylesHome.text2}>Olá, seja bem vindo(a)!</Text>
         </View>
  );
}

