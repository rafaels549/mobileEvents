import React, { useState , useEffect} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/Navigation';
import { RouteProp } from '@react-navigation/native';
import axios from 'axios';
import { View,  StyleSheet,Button } from 'react-native';
import Evento from '../service/GetEvento';

type EventoScreenProps = {

    navigation: StackNavigationProp<RootStackParamList, 'Eventos'>;
    route: RouteProp<RootStackParamList, 'Eventos'>;
  
    
    
    
}

  


const EventoScreen:  React.FC<EventoScreenProps> = ({ navigation,route}) =>{
  const {id} = route.params;

  useEffect(() => {
    const getEvento = async () => {
      try{
    const response =  await axios.get("http://localhost:8080/eventos/${id}");
      }catch(error:any){
         
      }
                  
    }

    getEvento();
  }, []); 
  
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