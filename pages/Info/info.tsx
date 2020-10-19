import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
  } from 'react-native';
  import styles from '../style/styles'

  export default function Info({navigation}) {


    return (
    <ScrollView>
        <View style={styles.container}>
            <View style={{margin:12}} >
                <Text style={styles.h2}>
                    Utilização (Seiri):
                </Text>
              
                <Text style={styles.bodyText}>
                    {"- Eliminar a desordem\n- Determinar a frequência de uso dos itens\n- Marcar itens não usados\n- Eliminar itens que não pertencem a uma área\n- Eliminar itens não utilizados"}
                </Text>
                
               
            </View>

            <View style={{margin:12}}>
            <Text style={styles.h2}>
                    Organização (Seiton):
                </Text>
                <Text style={styles.bodyText}>
                    {"- Organização sistemática do ambiente\n- Todo item tem um lugar \n- Itens com fácil acesso \n- Posição de acordo com a frequência de uso\n- Mapa de posicionamento\n- Demarcar os locais de cada itens \n- Nomear prateleiras"}
                </Text>
            </View>


            <View style={{margin:12}}>
            <Text style={styles.h2}>
                    Limpeza (Seiso):
                </Text>
                <Text style={styles.bodyText}>
                    {"- Manter a limpeza do ambiente\n- Não sujar\n- Criar rotina de limpeza (usou-limpou)\n- Inspeção para identificar mal posicionamento"}
                </Text>
            </View>


            <View style={{margin:12}}>
            <Text style={styles.h2}>
                    Padronização (Seiketsu):
                </Text>
                <Text style={styles.bodyText}>
                {"- Estabelecer cronogramas para os 3S's\n- Fácil reconhecimento dos procedimentos\n- Fixar avisos, quadros e instruções\n- Criação de Checklists\n- Padronização de etiquetas"}
                </Text>
            </View>


            <View style={{margin:12}}>
            <Text style={styles.h2}>
                    Disciplina (Shitsuke):
                </Text>
                <Text style={styles.bodyText}>
                {"- Tornar o 5S uma rotina\n- Realizar supervisão de tarefas\n- Promover treinamentos\n- Avaliar Performance\n- Melhoria continua\n- Corrigir problemas"}
                </Text>
            </View>
        </View>
    </ScrollView>
    )
  }