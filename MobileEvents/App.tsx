
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/routes/Navigation';
import Bar from './src/componentes/StatusBar';

const App: React.FC = () => {
  return (
    <>
  
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </>
  );
};

export default App;





