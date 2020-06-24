import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
  } from 'react-native';
  import styles from '../../style/styles'

  export default function Resultado({navigation}) {
   

       return (
           <ScrollView>
           <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
                <View style= {styles.container}>
                 <Text style= {styles.h2}> Resultado </Text>
                </View>
               <View style={{display: 'flex', flexDirection:'row', justifyContent: "space-evenly" , margin: 16}}>
                <View>
                    <Text style={styles.bodyText}> Média 3S:</Text>
                    <View style={{borderWidth:1, borderColor: '#000', justifyContent: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}> 4,1</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.bodyText}> Média 5S:</Text>
                    <View style={{borderWidth:1, borderColor: '#000', justifyContent: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}> 4,3</Text>
                    </View>
                </View>
                </View>
                
                <View style={{display: 'flex'}}>
                <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("Resultado")}>
                    <Text style={styles.secondaryButtonText}>Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate ("Resultado")}>
                    <Text style={styles.primaryButtonText}>Salvar</Text>
                </TouchableOpacity>
                </View>
           </View>
           </ScrollView>
           
         

      )

  }