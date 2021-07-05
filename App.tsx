import React, {useState,useEffect} from 'react'
import { getSession, removerUser } from './src/lib/storage'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
import Routes from './src/routes'

 
export default function App() { 

    const[initialRouteName,setInitialRouteName] = useState<any>(null); 
    const[fontsLoaded] = useFonts({
      'effra': require('./assets/fonts/Effra_Std_Rg.ttf')
    });

    useEffect(()=>{

        async function isAuthentication() {
            
            try {
                //await removerUser();
                const user = await getSession(); 

                if(user.token) setInitialRouteName("Home")
                else  setInitialRouteName("Login")
                
            } catch (error) {
                setInitialRouteName("Login")
              console.log("não tem token");
            }
           
        }
    
        isAuthentication(); 
    
    },[])

  if(initialRouteName && fontsLoaded)
    return (<Routes initialRouteName={initialRouteName} /> )

 return (<AppLoading ></AppLoading>)
}

 