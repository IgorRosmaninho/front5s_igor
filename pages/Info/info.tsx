import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  import styles from '../style/styles'

  export default function Info({navigation}) {


    return (
        <View style={styles.container}>
            <View style={{margin:12}} >
                <Text style={styles.h2}>
                    Utilização:
                </Text>
                <Text style={styles.bodyText}>
                    Aqui entram as informações referentes ao senso de utilização!
                </Text>
            </View>


            <View style={{margin:12}}>
            <Text style={styles.h2}>
                    Organização:
                </Text>
                <Text style={styles.bodyText}>
                    Aqui entram as informações referentes ao senso de organização!
                </Text>
            </View>


            <View style={{margin:12}}>
            <Text style={styles.h2}>
                    Limpeza:
                </Text>
                <Text style={styles.bodyText}>
                    Aqui entram as informações referentes ao senso de limpeza!
                </Text>
            </View>


            <View style={{margin:12}}>
            <Text style={styles.h2}>
                    Padronização:
                </Text>
                <Text style={styles.bodyText}>
                    Aqui entram as informações referentes ao senso de padronização!
                </Text>
            </View>


            <View style={{margin:12}}>
            <Text style={styles.h2}>
                    Disciplina:
                </Text>
                <Text style={styles.bodyText}>
                    Aqui entram as informações referentes ao senso de disciplina!
                </Text>
            </View>
        </View>
    )
  }