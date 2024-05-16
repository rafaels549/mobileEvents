// AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';
import Header from '../componentes/CustomHeader';
import EventoScreen from '../views/Eventos';
import CreateEventScreen from '../views/CreateEvent';
import ParticipantesScreen from '../views/Participantes';
import RegisterScreen from '../views/RegisterScreen';

// Definindo os tipos de navegação
export type RootStackParamList = {
 Home: undefined;
 Login: undefined;
 Evento:undefined;
 Register:undefined;
 CreateEvent:undefined;
 Participantes:undefined;

};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (

    <Stack.Navigator initialRouteName="Login"
    screenOptions={{
        header: (props) => <Header title="Teste"/>, 
      }}
      >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Evento" component={EventoScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
      <Stack.Screen name="Participantes" component={ParticipantesScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
         
       
    </Stack.Navigator>
    
  );
};

export default AppNavigator;
