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

  export default function Disciplina({navigation}) {
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
        }, divisor:{
            backgroundColor: '#000', height: 2, marginHorizontal:16, 
        }, questionText:{ 
            fontSize: 16, marginTop: 16

        }

    })
       return (
           <ScrollView>
           <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#fff'}}>
                <View style= {styles.container}>
                 <Text style= {{ fontSize: 18, fontWeight: 'bold' }}> Disciplina </Text>
                </View>
                <View style={styles.container}>
                    {/* Tentar fazer um flatlist comunicando com fetch API */}
                 <Text style= {styles.questionText}> 1.1. Utilização dos recursos existentes nos locais abertos </Text>
                 <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade1-4x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade24x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade34x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade44x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade54x.png")}/>
                 </View>
                 <Text style={styles.imputLabel}> Justifique: </Text>
                 <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                </View>
                <View style={styles.divisor}></View>

                <View style={styles.container}>
                    {/* Tentar fazer um flatlist comunicando com fetch API */}
                 <Text style= {styles.questionText}> 1.2. Utilização dos recursos existentes nos locais fechados </Text>
                 <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade1-4x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade24x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade34x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade44x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade54x.png")}/>
                 </View>
                 <Text style={styles.imputLabel}> Justifique: </Text>
                 <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                </View>
                <View style={styles.divisor}></View>

                <View style={styles.container}>
                    {/* Tentar fazer um flatlist comunicando com fetch API */}
                 <Text style= {styles.questionText}> 1.3. Estado de conservação de instalações e recursos </Text>
                 <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade1-4x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade24x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade34x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade44x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade54x.png")}/>
                 </View>
                 <Text style={styles.imputLabel}> Justifique: </Text>
                 <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                </View>
                <View style={styles.divisor}></View>

                <View style={styles.container}>
                    {/* Tentar fazer um flatlist comunicando com fetch API */}
                 <Text style= {styles.questionText}> 1.4. Controle dos problemas de conservação</Text>
                 <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade1-4x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade24x.png")}/>
                    <Image style={styles.iconContainer} source={require("../../../icons/grade34x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade44x.png")}/>
                     <Image style={styles.iconContainer} source={require("../../../icons/grade54x.png")}/>
                 </View>
                 <Text style={styles.imputLabel}> Justifique: </Text>
                 <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                </View>
                <View style={styles.divisor}></View>

                <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate ("Higiene")}>
                    <Text style={styles.primaryButtonText}>Próximo</Text>
                </TouchableOpacity>
           </View>
           </ScrollView>
           
         

      )

  }