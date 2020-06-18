import React, {useState} from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList,
  } from 'react-native';
  
  async function postData(url = '', data = {}) { 
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
})
  }

  export default function Limpeza({navigation}) {
    const styles = StyleSheet.create ({
        container: {
            margin:16,
        },iconDimension: {
            height: 24, 
            width:24,
        },iconContainer:{
            height:48,
            width:48,
            margin:8,
            justifyContent: "center",
            alignItems:'center'
        }, imputLabel:{
            color: '#000', fontSize: 14, marginTop: 8
        }, imputText:{
            color:'#000' ,backgroundColor: '#ffffff', height: 96, marginVertical: 16, fontSize: 16, padding: 12, borderColor: '#000', borderWidth: 1, textAlignVertical: 'top'
        },primaryButton:{
            backgroundColor: '#000', height: 48, justifyContent: 'center', margin: 16,
        },secondaryButton:{
            backgroundColor: '#fff', height: 48, justifyContent: 'center', marginVertical: 16, borderColor: '#000', borderWidth: 1
        }, primaryButtonText:{
            color: '#fff', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'
        }, secondaryButtonText:{
            color: '#000', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'
        },divisor:{
            backgroundColor: '#000', height: 2, 
        }, bodyText:{ 
            fontSize: 16, marginTop: 16
        },commentBox:{
            backgroundColor: '#f5f5f5',
            marginVertical: 16,
        }
    })
    
    // Data para Flatlist
    const [formLimpeza, setQuestion] = useState([
        {question: '1.1. Utilização dos recursos existentes nos locais abertos', id: '1'},
        {question: '1.2. Utilização dos recursos existentes nos locais fechados', id: '2'},
        {question: '1.3. Estado de conservação de instalações e recursos ', id: '3'},
        {question: '1.4. Controle dos problemas de conservação', id: '4'},
    ]);
    
    // tentiva de fazer o botão funcionar e trocar; dá para fazer integraçãp, mas precisa arrumar as animações de troca de imagem
    // const [iconOne, setIconOne] = useState( {uri: require("../../../icons/grade1-4x.png")});
     
    // const answer = () => {
    //     setIconOne ({ uri: require("/Users/taqtile/Desktop/FAU/5s_mercedes/mercedes_5s/icons/grade1-selected4x.png")})
    //     console.warn('nota 1')
    //     noteOne
    // };

    // Condicional para aparecer descritivo da nota (in progress)
     function note(){
        const [noteDescription, setNoteDescription] = useState(false);
     }

    function changeNote () {
        this.setState({
            noteDescription: !this.state.noteDescription
        }) 
    
    }
    
    


    function noteOne(){
        return(
        <View style={styles.commentBox}>
            <Text>Em vários locais foram encontradas diversas anormalidades no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente, falta ou desperdício</Text>
        </View>
        )
    }
   
    noteDescription ? noteOne : null  

    postData('/avaliacao/limpeza', formLimpeza)
       return (
        <ScrollView>
            <View style= {{backgroundColor: '#fff'}}> 
                <View style={styles.container}>
                    <View>
                        <Text style= {{ fontSize: 18, fontWeight: 'bold' }}> Limpeza</Text>
                    </View>
                    <FlatList
                    keyExtractor= {(item) => item.id}
                    data={formLimpeza}
                    renderItem= {({ item }) => (
                        <View>
                            <Text style={styles.bodyText}> {item.question}</Text>

                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                                <TouchableOpacity style={styles.iconContainer} onPress={changeNote}><Image style={styles.iconDimension} source={require("../../../icons/grade1-4x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade24x.png")} /></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade34x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade44x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade54x.png")}/></TouchableOpacity>
                            </View>
                            <Text style={styles.imputLabel}> Justifique: </Text>
                            <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                            <TouchableOpacity style={styles.secondaryButton}> 
                                <Text style={styles.secondaryButtonText}>Abrir câmera</Text>
                            </TouchableOpacity>
                            <View style={styles.divisor}></View>
                        </View>
                     )}
                    />
                    <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate ("Organizacao")}>
                        <Text style={styles.primaryButtonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
       )


  }