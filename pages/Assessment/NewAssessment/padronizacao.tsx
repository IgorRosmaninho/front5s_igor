import React, {useState} from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList
    
  } from 'react-native';
  
  async function postData(url = '', data = {}) { 
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  export default function Padronizacao({navigation}) {
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
    const [formPadronizacao, setQuestion] = useState([
        {question: '1.1. Utilização dos recursos existentes nos locais abertos', id: '1'},
        {question: '1.2. Utilização dos recursos existentes nos locais fechados', id: '2'},
        {question: '1.3. Estado de conservação de instalações e recursos ', id: '3'},
        {question: '1.4. Controle dos problemas de conservação', id: '4'},
    ]);

    postData('/avaliacao/padronizacao', formPadronizacao)
    .then(data => {
      console.log(data); // JSON data parsed by `response.json()` call
    });
    
       return (
        <ScrollView>
            <View style= {{backgroundColor: '#fff'}}> 
                <View style={styles.container}>
                    <View>
                        <Text style= {{ fontSize: 18, fontWeight: 'bold' }}> Padronização </Text>
                    </View>
                    <FlatList
                    keyExtractor= {(item) => item.id}
                    data={formPadronizacao}
                    renderItem= {({ item }) => (
                        <View>
                            <Text style={styles.questionText}> {item.question}</Text>

                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade1-4x.png")}/>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade24x.png")}/>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade34x.png")}/>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade44x.png")}/>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade54x.png")}/>
                            </View>

                            <Text style={styles.imputLabel}> Justifique: </Text>
                            <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                            <View style={styles.divisor}></View>
                        </View>
                     )}
                    />
                    <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate ("Resultado")}>
                        <Text style={styles.primaryButtonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
       )


  }