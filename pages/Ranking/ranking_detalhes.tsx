import {View, Text} from 'react-native'

import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import React, {useState, useEffect}  from 'react'
import styles from '../style/styles';
import {rank_graf} from '../api_back'


function RankingDetalhes ({route,navigation}) {

    //Pega parametros da página de origem
    const {Cost_center_id} = route.params;
    const {position} = route.params;

    const [data, setData] = useState([]);
    //const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await rank_graf.get('/'+ Cost_center_id)
            setData(response.data)
            };
        fetchData();
    },[]);
   


        //const data = [ 4.6, 4.4, 4.0, 3.6, 4.6, 4.7, 4.4]

        const axesSvg = { fontSize: 16, fill: 'grey' };
        const verticalContentInset = { top: 20, bottom: 20 }
        const xAxisHeight = 5
        const zero = 0

        // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
        // All react-native-svg-charts components support full flexbox and therefore all
        // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
        // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
        // and then displace the other axis with just as many pixels. Simple but manual.

        return (

            <View style={styles.container}>
            <Text style={styles.h1}>Centro de Custo: {Cost_center_id}</Text>
            <Text style={styles.h4}> Posição no Ranking {position}º </Text>
            <Text style={styles.bodyText}>Acompanhe as notas do centro de custo: </Text>
            <View style={{ height: 400, padding: 20, flexDirection: 'row' }}>
                
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                    min={0}
                    
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={verticalContentInset}
                        svg={{ stroke: '#000' }}
                        gridMin={0}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
        </View>
        )
    }



export default RankingDetalhes