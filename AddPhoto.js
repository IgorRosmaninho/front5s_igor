import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    Alert,
    Dimensions
} from 'react-native'
import {imagem, avaliacao, avaliacaoid} from './pages/api_back'
import styles from './pages/style/styles';
import ImagePicker  from 'react-native-image-picker'
import { Component } from 'react'
import axios from 'react-native-axios';
//import { ImagePickerIOS } from 'react-native'
//import { kMaxLength } from 'buffer'
//import { thisExpression } from '@babel/types'


export default function AddPhoto ({route,navigation}) {

    const { titulo } = route.params
    const [state,setState] = useState({ image: null, comment: '',})

    const pickImage = async () => {
    ImagePicker.showImagePicker({
         title: 'Escolha a Imagem',
         maxHeight: 600,
         maxWidth: 800
     }, res => {
         if (!res.didCancel) {
             setState({ image: {uri: res.uri, base64: res.data}})
         }
     });
    };

    const [id, setId] = useState({id:0});    
    useEffect(() => {
        const fetchData = async () => {
            const response1 = await avaliacaoid.get('')
            setId(response1.data)
                console.log(response1.data)
            };
        fetchData();
    },[]);

    const save = async() => { //fazer um post pro back
        Alert.alert('Imagem adicionada')
        imagem.post('', {avaliacaoId: id.id, titulo: titulo, image:JSON.stringify(state.image)}).then(response => {console.log(response)})}
         

        return (
            <ScrollView>
                
                <View style={styles.container}>
                    <Text style={styles.h2}>Adicione uma imagem:</Text>
                    <View style={estilo.imageContainer}>
                            <Image source={state.image} style={estilo.image}></Image>
                    </View>

                    <TouchableOpacity onPress= {() => {pickImage()}} style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Escolha a foto</Text>
                    </TouchableOpacity>
{/* 
                    <Text style={styles.imputLabel}>Justifique:</Text>
                    <TextInput placeholder='Algum comentário para a foto?'
                    style={styles.imputText}
                     value={state.comment}
                     onChangeText={comment => setState({ comment })}/> */}

                     <TouchableOpacity onPress= {() => {save()}} style={styles.primaryButton}>
                         <Text style={styles.primaryButtonText}>Salvar</Text>
                     </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

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