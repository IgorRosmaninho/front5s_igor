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

  import {hist_image} from '../api_back'

  export default function FormulariosDetalhes({navigation}) {

    const [data, setData] = useState({hits:[]});
    //const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await hist_image.get('')
            setData(response.data)
            };
        fetchData();
    },[]);

    //Convertendo de base64 para PNG
    var base64Icon = 'data:image/png;base64' + data;

    return (
    <ScrollView>               
                    <View style={styles.container}>
                        <Text style={styles.h2}>Adicione uma imagem:</Text>
                        <View style={estilo.imageContainer}>
                                <Image source={{uri: base64Icon}} style={estilo.image}></Image>
                    </View>
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
