import Reactimport { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'reactive-native'
import imagePiker from 'react-native-image-picker'
import { Component } from 'react'
import { ImagePickerIOS } from 'react-native'
import { kMaxLength } from 'buffer'
import { thisExpression } from '@babel/types'

class AddPhoto extends Component {
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
     })
    }
    save = async() => {
        Alert.alert('Imagem adicionada', this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Adicione uma imagem</Text>
                    <View style={style.imageContainer}>
                            <Image source={this.state.image} style={styles.image}></Image>
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Algum comentário para a foto?'
                     style={style.input} value={this.state.comment}
                     onChangeText={comment => this.setState({ comment })}/>
                     <TouchableOpacity onPress={this.save} style={styles.button}>
                         <Text style={styles.buttomText}>Salvar</Text>
                     </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alingItens: 'center'
    },
    title: {
        fontSize: 20,
        maginTop: Platform.OS === 'ios' ? 30:10,
        fontWeight: 'bold',
        imageContainer: {
            width: '90%',
            heigth: Dimensions.get('window').width * / 2, 
            backgroundColor: '#EEE',
            marginTop: 10,
        },
    image: {
        width: '100%',
        heigth: Dimensions.get('window').width * / 2,
        resizeMode: 'center'
        },
    button: {
        merginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
    })

    export defaut AddPhoto