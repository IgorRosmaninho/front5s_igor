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

  export default function Resultado({navigation}) {
    const styles = StyleSheet.create ({
        container: {
            margin:16,
        },iconContainer: {
            height: 24, 
            width:24,
            margin: 16,
        },imputLabel:{
            color: '#000', fontSize: 14, marginTop: 8
        }, imputText:{
            color:'#000' ,backgroundColor: '#ffffff', height: 96, marginVertical: 16, fontSize: 16, padding: 12, borderColor: '#000', borderWidth: 1, textAlignVertical: 'top'
        },primaryButton:{
            backgroundColor: '#000', height: 48, justifyContent: 'center', margin: 16,
        }, primaryButtonText:{
            color: '#fff', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'
        },secondaryButton:{
            backgroundColor: '#fff', height: 48, justifyContent: 'center', marginHorizontal: 16, borderWidth:2, borderColor: '#000'
        }, secondaryButtonText:{
            color: '#000', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'
        },
        divisor:{
            backgroundColor: '#000', height: 2, marginHorizontal:16, 
        }, questionText:{ 
            fontSize: 16, marginTop: 16

        }

    })
       return (
           <ScrollView>
           <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
                <View style= {styles.container}>
                 <Text style= {{ fontSize: 18, fontWeight: 'bold' }}> Resultado </Text>
                </View>
               <View style={{display: 'flex', flexDirection:'row', justifyContent: "space-evenly" , margin: 16}}>
                <View>
                    <Text style={styles.questionText}> Média 3S:</Text>
                    <View style={{borderWidth:1, borderColor: '#000', justifyContent: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}> 4,1</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.questionText}> Média 5S:</Text>
                    <View style={{borderWidth:1, borderColor: '#000', justifyContent: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}> 4,3</Text>
                    </View>
                </View>
                </View>
                
                <View styles={{justifySelf: 'flex-end'}}>
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