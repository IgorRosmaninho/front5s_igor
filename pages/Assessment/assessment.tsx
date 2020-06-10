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



  export default function Assessment({navigation}) {
    const nomes = [{nome: 'Amanda', idade: 23},{nome: 'Jorge', idade: 43},{nome: 'Giu', idade: 56}]
    
    const extractKey = item => item

    const listItem = ({item}) => (
        <View style={{flexDirection:'row', }}>
            <Text style={{fontSize:120}}> {item.nome} </Text>
            <Text> {item.idade} </Text>
        </View>
    )
    
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
             < FlatList data={nomes} keyExtractor={extractKey} renderItem={listItem} />
            
             {/* <TouchableOpacity style= {styles.secondaryButton} onPress={() => navigation.navigate('NewAssessment')}>
             <Text style= {{ color: '#fff',fontSize: 16, padding: 1, fontWeight: 'bold', alignSelf: 'center' }}> Nova Avaliação </Text>
             </TouchableOpacity>

             <View style={{margin: 16, justifyContent: 'center'}}>
                <Text style= {{ fontSize: 18, fontWeight: 'bold' }}> Ultimas avaliações </Text>
                

                </View> */}

                
            </View>


        
         
           
         

      )

  }