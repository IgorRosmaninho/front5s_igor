import React, {useState} from 'react';
import AddPhoto from "../../../AddPhoto";

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
  } from 'react-native';

  import styles from '../../style/styles';

  const One = require ('../../../icons/grade11x.png')
  const OneSelected = require ('../../../icons/grade1-selected1x.png')
  
//   async function postData(url = '', data = {}) { 
//     const response = await fetch(url, {
//       method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// })
//   }

  export default function Limpeza({navigation}) {
    
    
    // Data para Flatlist
    const formLimpeza = [
        {question: '1.1. Utilização dos recursos existentes nos locais abertos', id: '1'},
        {question: '1.2. Utilização dos recursos existentes nos locais fechados', id: '2'},
        {question: '1.3. Estado de conservação de instalações e recursos ', id: '3'},
        {question: '1.4. Controle dos problemas de conservação', id: '4'},
    ];
    
    //botão funcionar e trocar
     const iconOne = {One, OneSelected}
     
    const [iconOneSelected, setIconOneSelected] = useState(iconOne.One);
    const answer = () => {
        setIconOneSelected(iconOne.OneSelected);
        setNoteDescription(true)
    }

    //Condicional para aparecer descritivo da nota (in progress)
    const [noteDescription, setNoteDescription] = useState(false)
    const noteOne = () => {
        return(
        <View style={styles.commentBox}>
            <Text style= {styles.h4}>Descrição da nota</Text>
            <Text style = {styles.BodyTextSecondary}>Em vários locais foram encontradas diversas anormalidades no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente, falta ou desperdício</Text>
        </View>
        )
    }

    const openCamera = () => {
        AddPhoto
    } 
   
   

    //postData('/avaliacao/limpeza', formLimpeza)
       return (
        <ScrollView>
            <View style= {{backgroundColor: '#fff'}}> 
                <View style={styles.container}>
                    <View>
                        <Text style= {styles.h2}> Limpeza</Text>
                    </View>
                    <FlatList
                    keyExtractor= {(item) => item.id}
                    data={formLimpeza}
                    renderItem= {({ item }) => (
                        <View>
                            <Text style={styles.bodyText}> {item.question}</Text>

                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                                <TouchableOpacity style={styles.iconContainer} onPress={answer}><Image style={styles.iconDimension} source={iconOneSelected}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade24x.png")} /></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade34x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade44x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade54x.png")}/></TouchableOpacity>
                            </View>
                            {noteDescription ? noteOne() : null}
                            <Text style={styles.imputLabel}> Justifique: </Text>
                            <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                            <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("Evidencia")} > 
                                <Text style={styles.secondaryButtonText}>Adicionar evidência</Text>
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