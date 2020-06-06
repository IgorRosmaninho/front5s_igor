import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';

  export default function Info({navigation}) {


    return (
        <View style={{backgroundColor: '#fff', flex: 1, flexDirection: "column"}}>
            <View style={{ borderRadius: 8, marginHorizontal: 48, }}>
                <Text style={{ color: '#000', backgroundColor: '#d3d3d3', height: 48, marginVertical: 16, fontSize: 16, fontWeight: "bold", padding: 12}}>
                    Utilização:
                </Text>
                <Text style={{ color: '#000', fontSize: 12, marginTop: 4}}>
                    Aqui entram as informações referentes ai senso de utilização!
                </Text>
            </View>
            <View style={{ borderRadius: 8, marginHorizontal: 48, }}>
                <Text style={{ color: '#000', backgroundColor: '#d3d3d3', height: 48, marginVertical: 16, fontSize: 16, fontWeight: "bold", padding: 12}}>
                    Organização:
                </Text>
                <Text style={{ color: '#000', fontSize: 12, marginTop: 4}}>
                    Aqui entram as informações referentes ai senso de organização!
                </Text>
            </View>
            <View style={{ borderRadius: 8, marginHorizontal: 48, }}>
                <Text style={{ color: '#000', backgroundColor: '#d3d3d3', height: 48, marginVertical: 16, fontSize: 16, fontWeight: "bold", padding: 12}}>
                    Limpeza:
                </Text>
                <Text style={{ color: '#000', fontSize: 12, marginTop: 4}}>
                    Aqui entram as informações referentes ai senso de limpeza!
                </Text>
            </View>
            <View style={{ borderRadius: 8, marginHorizontal: 48, }}>
                <Text style={{ color: '#000', backgroundColor: '#d3d3d3', height: 48, marginVertical: 16, fontSize: 16, fontWeight: "bold", padding: 12}}>
                    Padronização:
                </Text>
                <Text style={{ color: '#000', fontSize: 12, marginTop: 4}}>
                    Aqui entram as informações referentes ai senso de padronização!
                </Text>
            </View>
            <View style={{ borderRadius: 8, marginHorizontal: 48, }}>
                <Text style={{ color: '#000', backgroundColor: '#d3d3d3', height: 48, marginVertical: 16, fontSize: 16, fontWeight: "bold", padding: 12}}>
                    Disciplina:
                </Text>
                <Text style={{ color: '#000', fontSize: 12, marginTop: 4}}>
                    Aqui entram as informações referentes ai senso de disciplina!
                </Text>
            </View>
        </View>
    )
  }