import React, {useState,useEffect} from 'react';
import styles from '../style/styles'
import icons from '../../icons/icon-components'
// import {MaterialIcons} from '@expo/vector-icons'
import {rank} from '../api_back'

import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
  } from 'react-native';

  //const [cc,setCc] = useState(null)
 // const [dd,setDd] = useState(null)

  export default function Ranking({navigation}) {
    //const [cc,setCc] = useState(null)
    //const [dd,setDd] = useState("oi")
    //const  [cc, setCc] = useState([  
        // useEffect(() => {
        //     setDd("olá")
        //     setCc([  
        //     { position: '1º', id: 'Centro de custo 23', nota: '4,3' },
        //     { position: '2º', id: 'Centro de custo 11', nota: '4,4' },
        //     { position: '3º', id: 'Centro de custo 02', nota: '4,8' },
        //     { position: '4º', id: 'Centro de custo 17', nota: '3,8' },
        //     { position: '5º', id: 'Centro de custo 14', nota: '4,1' },
        //     { position: '6º', id: 'Centro de custo 03', nota: '3,3' },
        //     { position: '7º', id: 'Centro de custo 09', nota: '4,3' },
        //     { position: '8º', id: 'Centro de custo 13', nota: '4,4' },
        //     { position: '9º', id: 'Centro de custo 20', nota: '4,8' },
        //     { position: '10º', id: 'Centro de custo 21', nota: '3,8' },
        //     { position: '11º', id: 'Centro de custo 27', nota: '4,1' },
        //     { position: '12º', id: 'Centro de custo 24', nota: '3,3' },
        //     { position: '13º', id: '102Centro de custo 12', nota: '4,3' },
        //     ]);
        // },[]);

    const Positions = [  
            { nposition: '1º'},
            { nposition: '2º'},
            { nposition: '3º'},
            { nposition: '4º'},
            { nposition: '5º'},
            { nposition: '6º'},
            { nposition: '7º'},
            { nposition: '8º'},
            { nposition: '9º'},
            ];

    const [cc, setCc] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await rank.get('/5s')
            setCc(response.data)
            console.log(cc)
            };
        fetchData();
    },[]);


    const pressHandler = (id) => {
        console.log(id);
    } 

    var x = 0

    return (
        <>
            <View style={styles.container}>
                <View style={{ flex: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <TextInput style={styles.textInput1} placeholder='Buscar'></TextInput>
                    <TouchableOpacity style={{ width: 48, height: 48, backgroundColor: '#000', display: "flex", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate('Filters')}>
                        <Image style={styles.iconDimension} source={require('../../icons/search_white.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ display: "flex", flexDirection: "row-reverse" }}>
                    <Text style={styles.bodyText}>Filtrar</Text>
                    <TouchableOpacity style={{ width: 48, height: 48, display: "flex", justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate('Filters')}>
                    <Image style={styles.iconDimension} source={require('../../icons/filter.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 0, flexDirection: "row", marginBottom: 108 }}>
                    
                    <FlatList style={{
                        flex: 0,
                        flexDirection: 'column',
                        marginTop: 8,
                        marginLeft: 8,
                        width: '100%'
                    }}
                        
                        keyExtractor={cc => cc.Cost_center_id}
                        data={cc}
                        renderItem={({item, index}) => {
                            return (
                                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('RankingDetalhes',{Cost_center_id: item.Cost_center_id, position: index+1})}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}> {index + 1}º      <Text style={{ fontSize: 18, fontWeight: 'normal' }}>Centro de Custo: {item.Cost_center_id}</Text> </Text>
                                    <Text style={{ fontSize: 18 }}>Nota:  {item.Cost_center_Avg_5s}</Text>
                                </TouchableOpacity>
                            );
                        }}

                    />

                </View>
            </View>
            </>
            );    
    };

  





// import React from 'react';

// import {
//     View,
//     Image,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     FlatList,
//     Button,
//   } from 'react-native';



//   export default function Ranking({navigation}) {
   
//   //   const [nome, mudarNome] = React.useState([]);
//   //   React.useEffect(() => {
//   //     // POST request using fetch inside useEffect React hook
//   //     const requestOptions = {
//   //         method: 'GET',
//   //         headers: { 'Content-Type': 'application/json' },
          
//   //     };
//   //     fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
//   //         .then(response => response.json())
//   //         .then(data => mudarNome(data));
  
//   // // empty dependency array means this effect will only run once (like componentDidMount in classes)
//   // }, []);

    
//        return (
//          <View style={{flex: 0.2, flexDirection: "column"}}>
//             <Text>Ranking</Text>
//              </View>
//         // <View>
//         //    {nome.map(user => <Text> {user.title} </Text> )}
//         //      <Text>Oi</Text>
//         //     </View>
//        )}