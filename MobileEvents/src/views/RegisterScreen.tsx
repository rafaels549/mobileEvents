import { RootStackParamList } from '../routes/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import UserRegister from '../service/Register';
import { View } from 'react-native';


type RegisterProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Register'>; 
}


const RegisterScreen: React.FC<RegisterProps> = ({navigation}) =>{
            const [user,setUser]   = useState<UserRegister>({username:'', email:'',password:'', confirmPassword:'' })
            
            return (
                    
                 <View>
                          
                 </View>
            )
}


export default RegisterScreen;