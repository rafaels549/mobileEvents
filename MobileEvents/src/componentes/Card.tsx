import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Card } from '@rneui/themed'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/Navigation';

type CardComponentProps = {
  imagem: string;
  eventoNome: string;
  data: string;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const CardComponent: React.FC<CardComponentProps> = ({ imagem, eventoNome, data,navigation }) => {

     const handleButtonClick = () => {
                 navigation.navigate("Evento");
        };
  return (
    <Card>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <View style={styles.textContainer}>
        <Text style={styles.eventoNome}>{eventoNome}</Text>
        <Text style={styles.data}>{data}</Text>
        <Button title="Clique Aqui" onPress={handleButtonClick} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  textContainer: {
       
  },
  eventoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  data: {
    fontSize: 14,
    color: '#888888',
  },
});

export default CardComponent;
