import React, {useState} from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import stylesHome from './homeStyle';



export default function Home() {

  return ( <View style={{flex: 1}}> 
            <Header></Header> 

                  <ScrollView> 
                        
                  </ScrollView>
           
            <Footer></Footer>
         </View>
  );
}

