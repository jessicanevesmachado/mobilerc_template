import React, {useState,useEffect} from 'react'
import { getSession } from './src/lib/storage'
import AppLoading from 'expo-app-loading'
import Routes from './src/routes'
import { 
    View 
  } from 'react-native';

export default function App() { 

    const[initialRouteName,setInitialRouteName] = useState<any>(null);

    useEffect(()=>{

        async function isAuthentication() {
            
            try {
                const user = await getSession(); 
                setInitialRouteName("Home")
            } catch (error) {
                setInitialRouteName("Login")
              console.log("não tem token");
            }
           
        }
    
        isAuthentication(); 
    
    },[])

  if(initialRouteName)
    return (<Routes initialRouteName={initialRouteName} /> )

 return (<AppLoading></AppLoading>)
}

 