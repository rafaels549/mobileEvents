import { RootStackParamList } from '../routes/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import UserRegister from '../service/Register';
import { View,TextInput, StyleSheet,Text,Button } from 'react-native';
import axios from 'axios';


type RegisterProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Register'>; 
}


const RegisterScreen: React.FC<RegisterProps> = ({navigation}) =>{
            const [user,setUser]   = useState<UserRegister>({username:'', email:'',password:'', confirmPassword:'' })
            const [error,setError] = useState('');
            const handleRegister = async () => {
                try {
                    
                    await axios.post("http://localhost:8080/auth/register", user);
                    
                    
                          
                        
                        navigation.navigate('Home');
                   
                } catch (error:any) {
                    
                   
                        
                        setError('Erro durante o registro: ' + error.response?.data?.message);
                
                }
            };
          
            return (
                    
                 <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={user.username}
        onChangeText={(text) => setUser({ ...user, username: text })}
      />
       <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={user.confirmPassword}
        onChangeText={(text) => setUser({ ...user, confirmPassword: text })}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={user.password}
        onChangeText={(text) => setUser({ ...user, password: text })}
        secureTextEntry
      />
      <Button title="Login" onPress={handleRegister} />
                 </View>
            )
}

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
export default RegisterScreen;