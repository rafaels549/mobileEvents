import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Header as HeaderRNE } from '@rneui/themed'; // Certifique-se de importar o Header correto do pacote
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone necessário
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Bar from './StatusBar';
type HeaderComponentProps = {
  title: string;
};

const Header: React.FunctionComponent<HeaderComponentProps> = ({ title }) => {
  const navigation = useNavigation();

 

  return (
    
    <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
       // Exemplo de ação para abrir o drawer
      }}
      rightComponent={
        <View style={styles.headerRight}>
          <Bar></Bar>
          <TouchableOpacity >
            
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
           
          >
            <Icon name="rocket" color="black" />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{ text: title, style: styles.heading }} 
      containerStyle={{ backgroundColor: '#f4511e' }} 
    />
 
  );
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
