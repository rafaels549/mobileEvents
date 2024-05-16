import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/Navigation';
import React, { useState } from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { View, TextInput,Text,Button,Image, Platform} from 'react-native';
import Evento from '../service/CreateEvent';
import * as ImagePicker from 'expo-image-picker';

type PropsCreateEvent = {
          navigation: StackNavigationProp<RootStackParamList, 'Evento'>;    
}


const CreateEventScreen: React.FC<PropsCreateEvent> = ({navigation}) =>{

    const  [evento , setEvento] = useState<Evento>({nome:'', imagem:'', data:new Date() ,horario:new Date() })
    const [imagem, setImagem] = useState<string | null>(null);
    const [date, setDate] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
    const [showEndPicker, setShowEndPicker] = useState<boolean>(false);
    const [time, setTime] = useState<Date>(new Date());
    const [end, setEnd] = useState<Date>(new Date());
    const selecionarImagem = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Permissão necessária para acessar a galeria de fotos.');
          return;
        }
    
   const result =  await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
             if(!result.canceled){
            setImagem (result.assets[0].uri);
             }

             setEvento
      };
      const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
        setEvento({ ...evento, data: currentDate });
      };
    
      const handleTimeChange = (event: DateTimePickerEvent, selectedTime?: Date | undefined) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(Platform.OS === 'ios');
        setTime(currentTime);
        setEvento({ ...evento, horario: currentTime });
      };

      const handleEndChange = (event: DateTimePickerEvent, selectedTime?: Date | undefined) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(Platform.OS === 'ios');
        setEnd(currentTime);
        setEvento({ ...evento, horario: currentTime });
      };
       const handleSubmit = () =>{
                       
       }
           return (
               
             <View>
                 <Text></Text>
                      
                          <TextInput
                           placeholder="Nome do Evento"
                           value={evento.nome}
                           onChangeText={(text) => setEvento({ ...evento, nome: text })}/>   
                            {imagem && <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />}
                     <Button title="Selecionar Imagem" onPress={selecionarImagem} /> 
                     <Button title="Selecionar Data" onPress={() => setShowDatePicker(true)} />
                     <Button title="Selecionar Hora" onPress={() => setShowTimePicker(true)} />
                     <Button title="Selecionar Hora" onPress={() => setShowEndPicker(true)} />
      {showDatePicker && (
        <DateTimePicker
        testID='DateTime'
          value={date}
          mode="date"
          display="default"
          is24Hour = {true}
          onChange={handleDateChange}
        />
      )}

{showTimePicker && (
        <DateTimePicker
        testID='DateTime'
          value={date}
          mode="date"
          display="default"
          is24Hour = {true}
          onChange={handleTimeChange}
        />
      )}

{showEndPicker && (
        <DateTimePicker
        testID='DateTime'
          value={date}
          mode="date"
          display="default"
          is24Hour = {true}
          onChange={handleEndChange}
        />
      )}
     
        <Button title="Criar Evento" onPress={handleSubmit}></Button>
    
             </View>
                        
           )
}


export default CreateEventScreen;