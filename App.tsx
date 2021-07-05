import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Alert
} from 'react-native';
import { Header } from './src/components/Header';
import { Footer } from './src/components/Footer';
import { Button } from './src/components/Button';
import { Input } from './src/components/Input';
import { Label } from './src/components/Label'
import loginImg from './src/assets/login.png'
import { theme } from './src/config/theme';
import api from './src/infra/http/api';
import { messageToUser } from './src/config/message';
 
export default function App() {

  const[user,setUser] = useState<string>();
  const[btnLoginDisabled,setBtnLoginDisabled] = useState<boolean>(false);
  const[password,setPassword] = useState<string>();

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
              console.log(result.data) 
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

  return ( <View style={{flex: 1}}>
       
        <Header></Header>
       
        <View style={styles.imageContainer}>
          <Image source={loginImg}/>
        </View>

        <ScrollView>
        <View style={styles.main}>
          <Text style={styles.hi}> Olá, seja bem vindo(a)!</Text>

          <View style={styles.user}>
            <Label value="Usuário"></Label>
            <Input onChangeText={(value:any)=>{setUser(value)}} defaultValue={user}></Input> 
          </View>

          <View style={styles.password}>
            <Label value="Senha"></Label>
            <Input secureTextEntry={true} onChangeText={(value:any)=>{setPassword(value)}} defaultValue={password}></Input> 
          </View> 

          <Button  disabled={btnLoginDisabled} onPress={session} title="ACESSAR"></Button>

        </View>
        </ScrollView>         
        <Footer></Footer>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  imageContainer:{  
    width:'100%',
    alignItems:'center'
  },
  image:{  
    width:'100%'
  }, 
  main: {
    flex: 1,  
    padding: 24
  },  
  hi:{
    color: theme.color.primary,
    fontSize: 20,
    marginBottom:16
  },
  user:{
    marginBottom:16
  },
  password:{
    marginBottom:30
  }

});