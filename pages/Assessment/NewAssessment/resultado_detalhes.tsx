import React, { useState, useEffect } from 'react';

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
  import styles from '../../style/styles'

  import {resultado} from '../../api_back'

  export default function ResultadoDetalhes({navigation}) {

    const [data, setData] = useState({hits:[]});
    //const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await resultado.get('')
            setData(response.data)
            
                console.log(response.data)
            };
        fetchData();
    },[]);
   

       return (
           <ScrollView>
               <View>
                   </View> 
           <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
                <View style= {styles.container}>
                <View>                    
               </View>
                 <Text style= {styles.h2}> Resultado - Detalhes</Text>
                </View>
               <View style={{display: 'flex', flexDirection:'column', justifyContent: "space-evenly" , margin: 16}}>
              
               <View style={{borderWidth:1, borderColor: '#000', justifyContent: 'center'}}>
               <View style={styles.espaco}/>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> Id do Usuário: {data.User_id}</Text>
               <View style={styles.espaco}/>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> Id do Centro de Custo: {data.Cost_center_id}</Text>
               <View style={styles.espaco}/>
               <View style={styles.divisor}/>
               <View style={styles.espaco}/>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> Utilização: {data.Answer_average_u}</Text>
               <View style={styles.espaco}/>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> Organização: {data.Answer_average_o}</Text>
               <View style={styles.espaco}/>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> Limpeza: {data.Answer_average_l}</Text>
               <View style={styles.espaco}/>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> Padronização: {data.Answer_average_p}</Text>
               <View style={styles.espaco}/>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> Disciplina: {data.Answer_average_d}</Text>
               <View style={styles.espaco}/>
               <View style={styles.divisor}/>
               <View style={styles.espaco}/>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> Média 3S: {data.Answer_average_3s}</Text>
               <View style={styles.espaco}/>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> Média 5S: {data.Answer_average_5s}</Text>
               <View style={styles.espaco}/>
               </View>
               </View>
               
             
                    
                                
                <View style={{display: 'flex'}}>
                <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate ("Resultado")}>
                    <Text style={styles.primaryButtonText}>Voltar</Text>
                </TouchableOpacity>
                </View>

            </View>
           </ScrollView>
           
         

      )

  }