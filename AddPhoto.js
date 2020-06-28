import React from 'react';
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
import styles from './pages/style/styles';
import ImagePicker  from 'react-native-image-picker'
import { Component } from 'react'
//import { ImagePickerIOS } from 'react-native'
// import { kMaxLength } from 'buffer'
//import { thisExpression } from '@babel/types'

export default class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => {
    ImagePicker.showImagePicker({
         title: 'Escolha a Imagem',
         maxHeight: 600,
         maxWidth: 800
     }, res => {
         if (!res.didCancel) {
             this.setState({ image: {uri: res.uri, base64: res.data}})
         }
     }); 
    }
    save = async() => { //fazer um post pro back
        Alert.alert('Imagem adicionada', this.state.comment)
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                
                <View style={styles.container}>
                    <Text style={styles.h2}>Adicione uma imagem:</Text>
                    <View style={estilo.imageContainer}>
                            <Image source={this.state.image} style={estilo.image}></Image>
                    </View>

                    <TouchableOpacity onPress={this.pickImage} style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Escolha a foto</Text>
                    </TouchableOpacity>

                    <Text style={styles.imputLabel}>Justifique:</Text>
                    <TextInput placeholder='Algum comentário para a foto?'
                    style={styles.imputText}
                     value={this.state.comment}
                     onChangeText={comment => this.setState({ comment })}/>

                     <TouchableOpacity onPress={this.save} style={styles.primaryButton}>
                         <Text style={styles.primaryButtonText}>Salvar</Text>
                     </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

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