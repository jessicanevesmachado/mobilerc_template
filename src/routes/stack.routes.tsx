import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../pages/login/loginComponents';
import Home from '../pages/home/homeComponents';
 
const stackRoutes = createStackNavigator();

interface IProps {
    initialRouteName:any;
}

const AppRoutes: React.FC<IProps> = ({initialRouteName}:any) =>(

    <stackRoutes.Navigator
        headerMode="none"
        initialRouteName={initialRouteName}
        screenOptions={{
            cardStyle:{
                backgroundColor:'white'
            }
        }}>

        <stackRoutes.Screen
            name="Login"
            component={Login}
        /> 


        <stackRoutes.Screen
            name="Home"
            component={Home}
        /> 
        
      
       
 

    </stackRoutes.Navigator>
       
     
)

export default AppRoutes;