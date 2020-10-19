import React, { useState, useEffect } from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList,
    SectionList,
    Alert
  } from 'react-native';
  import styles from '../../style/styles'

  import {salvabd, resultado, avaliacaoid} from '../../api_back'

  export default function Resultado({navigation}) {

    const [data, setData] = useState({hits:[]});
    const [id, setId] = useState({id:0});
    //const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await resultado.get('')
            setData(response1.data)
                console.log(response1.data)

            const response2 = await avaliacaoid.get('')
            setId(response2.data)
                console.log(response2.data)
            };
        fetchData();
    },[]);

    // //Manda calcular no back
    // const calcula = async() => { //fazer um post pro back
    //     //Alert.alert('Imagem adicionada', this.state.comment)
    //     calculamedia.post('').then(response => {console.log(response)})}



        //Manda salvar o back salvar no BD
    const salvar = async() => { //fazer um post pro back
        Alert.alert('Avaliação salva!')
        salvabd.post('',{id : id.id}).then(response => {console.log(response)})}

       return (
           <ScrollView>
               <View>
                   </View> 
           <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
                <View style= {styles.container}>
                <View>                    
               </View>
                 <Text style= {styles.h2}> Resultado </Text>
                </View>
               <View style={{display: 'flex', flexDirection:'row', justifyContent: "space-evenly" , margin: 16}}>
                <View>
                    <Text style={styles.bodyText}> Média 3S:</Text>
                    <View style={{borderWidth:1, borderColor: '#000', justifyContent: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}> {data.Answer_average_3s}%</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.bodyText}> Média 5S:</Text>
                    <View style={{borderWidth:1, borderColor: '#000', justifyContent: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}> {data.Answer_average_5s}%</Text>
                    </View>
                </View>
                </View>
                
                <View style={{display: 'flex'}}>
                <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("ResultadoDetalhes")}>
                    <Text style={styles.secondaryButtonText}>Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryButton} onPress={() => {salvar();navigation.navigate ("Resultado")}}>
                    <Text style={styles.primaryButtonText}>Salvar</Text>
                </TouchableOpacity>
                </View>
           </View>
           </ScrollView>
           
         

      )

  }