
import {
  StyleSheet
} from 'react-native';
import { theme } from '../../config/theme';


const stylesLogin = StyleSheet.create({
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

  export default stylesLogin;