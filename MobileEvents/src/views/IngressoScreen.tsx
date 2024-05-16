import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/Navigation';
import { View,  StyleSheet,Image } from 'react-native';
import React from 'react';

type IngressoProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;  
}


 const IngressoScreen:React.FC<IngressoProps> = ({navigation}) =>{
                     return (

                        <View >
                                    <Image>
                                               
                                         </Image>      
                          
                                </View>     
                     )
 }




