import React, {useState, useEffect} from 'react'
import {
  Text,
  ScrollView,
  Image,
  View,
  Alert
} from 'react-native';
import { Header } from '../../components/HeaderLogin';
import { Footer } from '../../components/FooterLogin';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label'
import { Load } from '../../components/Loading'
import loginImg from '../../assets/login.png'
import { theme } from '../../config/theme';
import api from '../../infra/http/api';
import { messageToUser } from '../../config/message';
import {getSession, setSession, UserAuthenticationProps } from '../../lib/storage';
import stylesLogin from './loginStyle';
import { useNavigation } from '@react-navigation/core';

export default function Login() {

  const[user,setUser] = useState<string>();
  const[btnLoginDisabled,setBtnLoginDisabled] = useState<boolean>(false);
  const[password,setPassword] = useState<string>();
  const navigation = useNavigation();

  async function session(){

    try { 

        if(user && password){  
            setBtnLoginDisabled(true); 
            var userToValidation = {
              "email":user,
              "password":password 
            } 
            const result:any = await  api.post("/session",userToValidation);  
            if(result.data){ 

              const userAuthentication = {
                email:result.data.user.email,
                name:result.data.user.name,
                token:result.data.token

              } as UserAuthenticationProps 
              
              try {
                await setSession(userAuthentication)  
                navigation.navigate('Home');
              } catch (error) { }
               
            }  
      }
      else{
        Alert.alert('Usuário e senha são obrigatórios.')
      }
      
    } catch (error) { 

      if(error.response.status == 400)
      {
        Alert.alert('Usuário ou senha incorreto.')
      }else{
        Alert.alert(messageToUser.errors.generic)
      }  
    }
    finally {
      setBtnLoginDisabled(false);
      
   }
  }

  return (   <View style={{flex: 1}}>
                  <Header></Header> 
                  <View style={stylesLogin.imageContainer}>
                    <Image source={loginImg}/>
                  </View>

                  <ScrollView>
                  <View style={stylesLogin.main}>
                    <Text style={stylesLogin.hi}> Olá, seja bem vindo(a)!</Text>

                    <View style={stylesLogin.user}>
                      <Label value="Usuário"></Label>
                      <Input onChangeText={(value:any)=>{setUser(value)}} defaultValue={user}></Input> 
                    </View>

                    <View style={stylesLogin.password}>
                      <Label value="Senha"></Label>
                      <Input secureTextEntry={true} onChangeText={(value:any)=>{setPassword(value)}} defaultValue={password}></Input> 
                    </View> 

                    <Button  disabled={btnLoginDisabled} onPress={session} title="ACESSAR"></Button>
                    {btnLoginDisabled &&
                        <Load/>
                    }
          

                  </View>
                  </ScrollView>         
                  <Footer></Footer>
            </View>
  );
}

