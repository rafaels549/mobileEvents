import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { RootStackParamList } from '../routes/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>; 
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
      navigation.navigate('Home');
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
