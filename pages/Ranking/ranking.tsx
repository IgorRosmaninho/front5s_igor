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
                                    <Text style={{ fontSize: 18 }}>Nota:  {item.Cost_center_Avg_5s.toFixed(2)}</Text>
                                </TouchableOpacity>
                            );
                        }}

                    />

                </View>
            </View>
            </>
            );    
    };

