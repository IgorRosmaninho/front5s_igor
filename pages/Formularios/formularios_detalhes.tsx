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

    
    const [data, setData] = useState({uri:null, base64:null});

    useEffect(() => {
        const fetchData = async () => {
            const response = await hist_image.get('/2')
            //setState(image: JSON.parse(response))
            console.log(response.data.uri)
            setData({uri:response.data.uri,base64: response.data.base64})
       
            };
        fetchData();
    },[]);
   
  
//Convertendo de base64 para PNG
var base64Icon = 'data:image/png;base64,' + data.base64;
//var x = "file:///storage/emulated/0/Pictures/image-c20f6c43-da42-4c05-a4e6-f67402b1a29c.jpg"

return (
<ScrollView>               
                <View style={styles.container}>
                    <Text style={styles.h2}> Evidência:</Text>
                    <View style={estilo.imageContainer}>
                            <Image source={{uri:base64Icon}} style={estilo.image}></Image>
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
