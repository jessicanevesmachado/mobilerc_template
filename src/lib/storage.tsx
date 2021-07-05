import AsyncStorage from '@react-native-async-storage/async-storage'

export const userKey = "@lab214:user";

export interface  UserAuthenticationProps{ 
    email:string;
    name:string;
    token:string;  
}

export async function setSession(user:UserAuthenticationProps):Promise<void> { 

   try {
        
        await AsyncStorage.setItem(userKey, JSON.stringify(user))
       
   } catch (error) {
         throw new Error(error);
   }

}

export async function getSession():Promise<UserAuthenticationProps> { 

    try {

        const data = await AsyncStorage.getItem(userKey); 
        const emptyUser = {} as UserAuthenticationProps; 
        const userAuthentication = data?(JSON.parse(data) as UserAuthenticationProps):emptyUser;

        return userAuthentication;

        /* como recurperar 
          const session = await getSession();
          console.log(session)
        */
        
    } catch (error) {
          throw new Error(error);
    }
 
 }

 export async function removerUser():Promise<void>{ 
    await AsyncStorage.removeItem(userKey); 
}