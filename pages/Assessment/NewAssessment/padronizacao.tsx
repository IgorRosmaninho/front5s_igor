import React, {useState, useEffect} from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList
  } from 'react-native';
  import styles from '../../style/styles'
  
  import {pergunta} from '../../api_back'

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

  export default function Padronizacao({navigation}) {
  
    const [data, setData] = useState({hits:[]});

    useEffect(() => {
        const fetchData = async () => {
            const response = await pergunta.get('/4')
            setData(response.data)
            
                console.log(response.data)
            };
        fetchData();
    },[]);

    const [formPadronizacao, setQuestion] = useState([
        {question: '1.1. Utilização dos recursos existentes nos locais abertos', id: '1'},
        {question: '1.2. Utilização dos recursos existentes nos locais fechados', id: '2'},
        {question: '1.3. Estado de conservação de instalações e recursos ', id: '3'},
        {question: '1.4. Controle dos problemas de conservação', id: '4'},
    ]);

    //postData('/avaliacao/padronizacao', formPadronizacao)
    
       return (
        <ScrollView>
            <View style= {{backgroundColor: '#fff'}}> 
                <View style={styles.container}>
                    <View>
                        <Text style= {styles.h2}> Padronização </Text>
                    </View>
                    <FlatList
                    keyExtractor= {(item) => item.titulo}
                    data={data}
                    renderItem= {({ item }) => (
                        <View>
                            <Text style={styles.bodyText}> {item.titulo} {item.descricao}</Text>

                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade1-4x.png")}/>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade24x.png")}/>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade34x.png")}/>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade44x.png")}/>
                                <Image style={styles.iconContainer} source={require("../../../icons/grade54x.png")}/>
                            </View>

                            <Text style={styles.imputLabel}> Justifique: </Text>
                            <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                            <View style={styles.divisor}></View>
                        </View>
                     )}
                    />
                    <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate ("Resultado")}>
                        <Text style={styles.primaryButtonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
       )


  }