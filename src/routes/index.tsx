import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import StackRoutes from './stack.routes'

const Routes = ({initialRouteName}:any) => {
    console.log('testando: '+initialRouteName);
    
    return(
        <NavigationContainer>
                <StackRoutes initialRouteName={initialRouteName} /> 
         </NavigationContainer>
    )
}

 export default Routes