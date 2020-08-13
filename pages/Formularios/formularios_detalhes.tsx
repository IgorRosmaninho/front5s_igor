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

  import {hist_image, avaliacao, pergunta} from '../api_back'

  export default function FormulariosDetalhes({ route, navigation }) {

    //A ideia é criar uma response para cada imagem, de modo a renderizar todas as imagens feitas
    //O problema é quando essa imagem não tiver sido feita. O que renderizar? 
    //Renderização condicional para não renderizar quando não existir no bd?

    const [data, setData] = useState({uri:null, base64:null});
    const [question, setQuestion] = useState({s: null, titulo: null, descricao: null})
    const [just, setJust] = useState({justificativas: null}) //Verificar como as justificativas serão enviadas do back
    const [nota, setNota] = useState({notas: null});

    //Pegando imagem
    //Dá pra fazer um laço aqui? Pra ir alterando o estado conforme for renderizando
    useEffect(() => {
        const fetchData = async () => {
            const response1 = await hist_image.get('/2')
            //setState(image: JSON.parse(response))
            console.log(response1.data.uri)
            setData({uri:response1.data.uri,base64: response1.data.base64})

            const response2 = await pergunta.get('') //Verificar a rota para passar as perguntas
            setQuestion({s: response2.question.s, titulo: response2.question.titulo, descricao: response2.question.descricao}) 

            const response3 = await avaliacao.get('') //Verificar a rota para passar as justificativas
            setJust({justificativas: response3.just.justificativas}) 

            const response4 = await avaliacao.get('') //Verificar a rota para passar as notas
            setNota({notas: response4.nota.notas})
            };
        fetchData();
    },[]);


//Convertendo de base64 para PNG
var base64Icon = 'data:image/png;base64,' + data.base64;
//var x = "file:///storage/emulated/0/Pictures/image-c20f6c43-da42-4c05-a4e6-f67402b1a29c.jpg"

return (
    <ScrollView>               
        <View style={styles.container}>
            <Text style={styles.h2}> Evidências:</Text>
            <View/>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}> {question[0].titulo}: {question[0].descricao}.</Text>
            <View/>
            <Text style={{fontSize: 16}}> Nota: </Text>
            <View/>
            <Text style={{fontSize: 16}}> Justificativa: .</Text>
            <View/>
            <View style={estilo.imageContainer}>
                <Image source={{uri:base64Icon}} style={estilo.image}></Image>
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}> {question[1].titulo} {question[1].descricao}.</Text>
            <View/>
            <Text style={{fontSize: 16}}> Nota: </Text>
            <View/>
            <Text style={{fontSize: 16}}> Justificativa: .</Text>
            <View/>
            <View style={estilo.imageContainer}>
                <Image source={{uri:base64Icon}} style={estilo.image}></Image>
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}> {question[2].titulo} {question[2].descricao}.</Text>
            <View/>
            <Text style={{fontSize: 16}}> Nota: </Text>
            <View/>
            <Text style={{fontSize: 16}}> Justificativa: .</Text>
            <View/>
            <View style={estilo.imageContainer}>
                <Image source={{uri:base64Icon}} style={estilo.image}></Image>
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}> {question[3].titulo} {question[3].descricao}.</Text>
            <View/>
            <Text style={{fontSize: 16}}> Nota: </Text>
            <View/>
            <Text style={{fontSize: 16}}> Justificativa: .</Text>
            <View/>
            <View style={estilo.imageContainer}>
                <Image source={{uri:base64Icon}} style={estilo.image}></Image>
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
