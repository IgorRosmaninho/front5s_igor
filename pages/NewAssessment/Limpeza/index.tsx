import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    
    
  } from 'react-native';

  export default function Limpeza({navigation}) {
    const styles = StyleSheet.create ({
        container: {
            margin:16,
        },iconContainer: {
            height: 24, 
            width:24,
            margin: 16,
        },imputLabel:{
            color: '#000', fontSize: 14, marginTop: 8
        }, primaryButton:{
            backgroundColor: '#000', height: 48, justifyContent: 'center', margin: 16,
        }, primaryButtonText:{
            color: '#fff', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'
        }

    })
       return (
           <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <View style= {styles.container}>
                 <Text style= {{ fontSize: 18, fontWeight: 'bold' }}> Limpeza </Text>
                </View>
                <View style={styles.container}>
                    {/* Tentar fazer um flatlist comunicando com fetch API */}
                 <Text style= {{ fontSize: 16 }}> 1.1. Utilização dos recursos existentes nos locais abertos </Text>
                 <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade1-4x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade24x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade34x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade44x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade54x.png")}/>
                 </View>
                 <Text style={styles.imputLabel}> Justifique: </Text>
                 <TextInput style= {{ color:'#000' ,backgroundColor: '#ffffff', height: 48, marginVertical: 16, fontSize: 16, padding: 12,}}>Escreva aqui sua justificativa</TextInput>
                </View>
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>Próximo</Text>
                </TouchableOpacity>
           </View>
           
           
         

      )

  }