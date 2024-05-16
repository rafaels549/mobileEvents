import { RootStackParamList } from '../routes/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Participantes from '../service/GetPaticipantes';
import { DataTable } from 'react-native-paper';
import User from '../service/UserAsParticipant';
type ParticipantesProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Evento'>; 
}


const ParticipantesScreen: React.FC<ParticipantesProps> = ({navigation}) =>{
               const [participantes, setParticipantes] = useState <Participantes>({users: []})

               const getParticipantes = () => {
                const [user , setUser] = useState<User>({ name: '', email:''})
             
             setParticipantes({ users: [...participantes.users, user] });
           };
               return (
                <View style={styles.container}>
                <Text style={styles.title}>Lista de Participantes</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Nome</DataTable.Title>
                        <DataTable.Title>Email</DataTable.Title>
                    </DataTable.Header>
    
                    <FlatList
                        data={participantes.users}
                        renderItem={({ item }) => (
                            <DataTable.Row>
                                <DataTable.Cell>{item.name}</DataTable.Cell>
                                <DataTable.Cell>{item.email}</DataTable.Cell>
                            </DataTable.Row>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </DataTable>
            </View>
                            
                           
               )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});


export default ParticipantesScreen;