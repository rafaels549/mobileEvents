import React, { useState } from 'react';
import { View,  StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/Navigation';
import Evento from '../service/GetEvento';
import EventosProp from '../service/GetEventos';
import CardComponent from '../componentes/Card';


type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>; 
   
};
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [eventos , setEventos] = useState<EventosProp>({eventos: []});
  const adicionarEvento = () => {
       const [evento , setEvento] = useState<Evento>({ id:0 , nome: '', imagem: '', data: '' ,horario:'',owner:''})
    
    setEventos({ eventos: [...eventos.eventos, evento] });
  };
  return (
    <View style={styles.container}>
              <CardComponent imagem ="nova" eventoNome='Evento' data ="27/12/200" navigation = {navigation}/>
                
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});

export default HomeScreen;
