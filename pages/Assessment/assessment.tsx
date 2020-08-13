import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Button,
  } from 'react-native';

  import {id} from '../api_back'


  export default function Assessment({navigation}) {

    //Enviar para o backend
    const save = async() => { //fazer um post pro back
        //Alert.alert('Imagem adicionada', this.state.comment)
        avaliacao.post('/p', {Question_id_answer_p: {notas:[l1,l2,l3,l4], justificativas:[text1,text2,text3,text4] }}).then(response => {console.log(response)})}
          
    
    const styles = StyleSheet.create ({
        secondaryButton: {
            backgroundColor: '#000',
             height: 48, color:'#fff', 
             justifyContent: 'center',
              margin: 16,
        }
    })

       return (
         <View style={{flex: 0.2, flexDirection: "column"}}>
             {/* < FlatList data={nomes} keyExtractor={extractKey} renderItem={listItem} /> */}
            
             <TouchableOpacity style= {styles.secondaryButton} onPress={() => navigation.push('NewAssessment')}>
             <Text style= {{ color: '#fff',fontSize: 16, padding: 1, fontWeight: 'bold', alignSelf: 'center' }}> Nova Avaliação </Text>
             </TouchableOpacity>

             <View style={{margin: 16, justifyContent: 'center'}}>
                <Text style= {{ fontSize: 18, fontWeight: 'bold' }}> Ultimas avaliações </Text>
                

                </View>

                
            </View>


        
         
           
         

      )

  }