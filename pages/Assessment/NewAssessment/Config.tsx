import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import styles from '../../style/styles'

  export default function NewAssessment({navigation}) {
    
       return (
           <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            <View style={{ borderRadius: 8, marginHorizontal: 16, }}> 
                <Text style={{color: '#000', fontSize: 14, marginTop: 8}}>Centro de custo</Text>
                <TextInput style= {{ color:'#000' ,backgroundColor: '#ffffff', height: 48, marginTop: 16, marginBottom: 8, fontSize: 16, padding: 12}}>Qual o centro de custo?</TextInput>
             </View>
            <View style={{ justifyContent: 'center', alignSelf: 'center', width: '100%'}}>
              <TouchableOpacity style={{backgroundColor: '#000', height: 48, justifyContent: 'center', margin: 16,}} 
                onPress={() => navigation.navigate ("Utilizacao") }
                >
                 <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}} > Começar</Text>
            </TouchableOpacity>

         </View>
      </View>
           
         

      )

  }