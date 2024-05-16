import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/Navigation';
import { View,  StyleSheet,Button } from 'react-native';
import Evento from '../service/GetEvento';

type EventoProp = {

    navigation: StackNavigationProp<RootStackParamList, 'Evento'>; 
}



const EventoScreen:  React.FC<EventoProp> = ({ navigation}) =>{

    const [eventos , setEvento] = useState<Evento>({id: 0,nome:'', imagem:'', data:'',horario:'',owner:''})
    const handleParticipar = () => {
                
      };
        return (
            
             <View>
                      <Button title="Participar" onPress={handleParticipar} />     
                       
             </View>
               
        )      
}

export default EventoScreen;