import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';

  export default function Assessment({navigation}) {

    const styles = StyleSheet.create ({
        secondaryButton: {
            backgroundColor: '#000',
             height: 48, color:'#fff', 
             justifyContent: 'center',
              margin: 16,
        }

    })
    
       return (
         <View style={{flex: 1, flexDirection: "column"}}>
             <TouchableOpacity style= {styles.secondaryButton} onPress={() => navigation.navigate('NewAssessment')}>
             <Text style= {{ color: '#fff',fontSize: 16, padding: 1, fontWeight: 'bold', alignSelf: 'center' }}> Nova Avaliação </Text>
             </TouchableOpacity>

             <View style={{margin: 16, justifyContent: 'center'}}>
                <Text style= {{ fontSize: 18, fontWeight: 'bold' }}> Ultimas avaliações </Text>
                

                </View>
            </View>
        
         
           
         

      )

  }