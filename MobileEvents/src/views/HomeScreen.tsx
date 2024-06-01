import React, { useState, useEffect } from 'react';
import { View,  StyleSheet,TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/Navigation';
import { RouteProp } from '@react-navigation/native';
import Evento from '../service/GetEvento';
import EventosProp from '../service/GetEventos';
import CardComponent from '../componentes/Card';
import axios from 'axios';


type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>; 
  route: RouteProp<RootStackParamList, 'Home'>;
   
};
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [eventos , setEventos] = useState<EventosProp>({eventos: []});
  
      
       const handleCardPress = (id: number) => {
        navigation.navigate('Eventos', {
                     id: id,
        });
      };
 
    useEffect(() => {
      const fetchEventos = async () => {

          try{

                const response =  await axios.get("http://localhost:8080/eventos/");

                    setEventos(
                      { eventos: [...eventos.eventos, response.data] }
                    );
                  }catch(error:any){
                          
                  }

      }

      fetchEventos();

     }, []); 
  return (
    <View style={styles.container}>
      {/* Itera sobre os eventos e renderiza os componentes de cartão */}
      {...eventos.eventos.map((evento) => (
     <TouchableOpacity key={evento.id} onPress={() => handleCardPress(evento.id)}>
        <CardComponent  imagem={evento.imagem} eventoNome={evento.nome} data={evento.data} navigation={navigation} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});

export default HomeScreen;
