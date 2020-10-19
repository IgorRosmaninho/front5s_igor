import React, { useState, useEffect } from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
    FlatList,
  } from 'react-native';
  import styles from '../style/styles'

  import {hist_image, avaliacao, pergunta, avaliacaoid} from '../api_back'

  export default function FormulariosDetalhes({ route, navigation }) {
    //Parâmetros enviados do formularios_sensos
    const { id, Cost_center_id, createdAt, Question_id_answer_S, s } = route.params;

    //A ideia é criar uma response para cada imagem, de modo a renderizar todas as imagens feitas
    //O problema é quando essa imagem não tiver sido feita. O que renderizar? 
    //Renderização condicional para não renderizar quando não existir no bd?

    const [data1, setData1] = useState({uri:null, base64:null});
    const [data2, setData2] = useState({uri:null, base64:null});
    const [data3, setData3] = useState({uri:null, base64:null});
    const [data4, setData4] = useState({uri:null, base64:null});

    const [question, setQuestion] = useState([0,0,0,0])
    const [aval, setAval] = useState({notas: [0,0,0,0], justificativas: ["","","",""]}) //Verificar como as justificativas serão enviadas do back

    //Pegando imagem
    //Dá pra fazer um laço aqui? Pra ir alterando o estado conforme for renderizando
    useEffect(() => {
        const fetchData = async () => {
            const response5 = await pergunta.get('/'+ s) //Verificar a rota para passar as perguntas
            setQuestion(response5.data) 

            const response6 = await avaliacao.get('/' + id + '/' + Question_id_answer_S) //Verificar a rota para passar as justificativas
            setAval({notas: response6.data.notas, justificativas: response6.data.justificativas}) 

            const response1 = await hist_image.get('/' + id + '/' + s +'.1')
            setData1({uri:response1.data.uri,base64: response1.data.base64})

            const response2 = await hist_image.get('/' + id + '/' + s +'.2')
            setData2({uri:response2.data.uri,base64: response2.data.base64})

            const response3 = await hist_image.get('/' + id + '/' + s +'.3')
            setData3({uri:response3.data.uri,base64: response3.data.base64})

            const response4 = await hist_image.get('/' + id + '/' + s +'.4')
            setData4({uri:response4.data.uri,base64: response4.data.base64})


            };
        fetchData();
    },[]);


//Convertendo de base64 para PNG
var base64Icon1 = 'data:image/png;base64,' + data1.base64;
var base64Icon2 = 'data:image/png;base64,' + data2.base64;
var base64Icon3 = 'data:image/png;base64,' + data3.base64;
var base64Icon4 = 'data:image/png;base64,' + data4.base64;
//var x = "file:///storage/emulated/0/Pictures/image-c20f6c43-da42-4c05-a4e6-f67402b1a29c.jpg"

return (
    <ScrollView>               
        <View style={styles.container}>
            <Text style={styles.h2}> Evidências:</Text>
            <View/>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}> {question[0].titulo}: {question[0].descricao}.</Text>
            <View/>
            <Text style={{fontSize: 16}}> Nota: {aval.notas[0]} </Text>
            <View/>
            <Text style={{fontSize: 16}}> Justificativa: {aval.justificativas[0]}.</Text>
            <View/>
            <View style={estilo.imageContainer}>
                <Image source={{uri:base64Icon1}} style={estilo.image}></Image>
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}> {question[1].titulo}: {question[1].descricao}.</Text>
            <View/>
            <Text style={{fontSize: 16}}> Nota: {aval.notas[1]} </Text>
            <View/>
            <Text style={{fontSize: 16}}> Justificativa: {aval.justificativas[1]}.</Text>
            <View/>
            <View style={estilo.imageContainer}>
                <Image source={{uri:base64Icon2}} style={estilo.image}></Image>
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}> {question[2].titulo}: {question[2].descricao}.</Text>
            <View/>
            <Text style={{fontSize: 16}}> Nota: {aval.notas[2]} </Text>
            <View/>
            <Text style={{fontSize: 16}}> Justificativa: {aval.justificativas[2]}.</Text>
            <View/>
            <View style={estilo.imageContainer}>
                <Image source={{uri:base64Icon3}} style={estilo.image}></Image>
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}> {question[3].titulo}: {question[3].descricao}.</Text>
            <View/>
            <Text style={{fontSize: 16}}> Nota: {aval.notas[3]} </Text>
            <View/>
            <Text style={{fontSize: 16}}> Justificativa: {aval.justificativas[3]}.</Text>
            <View/>
            <View style={estilo.imageContainer}>
                <Image source={{uri:base64Icon4}} style={estilo.image}></Image>
            </View>
        </View>
    </ScrollView>
)}

const estilo = StyleSheet.create({
    imageContainer:{
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE',
        marginTop:10
    },
    image:{
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center'
    }
})
