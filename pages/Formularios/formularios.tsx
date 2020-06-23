import React, { Component } from 'react';
import api from '../Formularios/api';
import { ScrollView } from 'react-native-gesture-handler';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Button
  } from 'react-native';

  export default function Formulario({navigation}) {

    const styles = StyleSheet.create({ 
      container: {
        flex: 1,
        backgroundColor: '#fafafa'
      },
  
      list: {
        padding: 20
      },
  
      historicoContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        padding: 20,
        marginBottom: 20
      },
  
      historicoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
      },
  
      historicoDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
      },
  
      historicoButton: {
        height: 42,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#999',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      },
  
      historicoButtonText: {
        fontSize: 16,
        color: '#999',
        fontWeight: 'bold'
      }
    });

    class Formularios extends Component{
    state = {
      docs: []
    };

    componentDidMount() {
      this.loadHistorico();
    }
   
    loadHistorico = async () => {
      const response = await api.get('');
      
      const { docs } = response.data;

      this.setState({ docs });
  };

  renderItem = ({ item }) => (
    <View>
      <Text style={styles.historicoTitle}>{item.Cost_center_id}</Text>
      <Text style={styles.historicoDescription}>{item.Answer_average_x}</Text>
      <Text style={styles.historicoDescription}>Data da avaliação: {item.createdAt}</Text>

      <TouchableOpacity style={styles.historicoButton} onPress={() => {}}>
        <Text style={styles.historicoButtonText}> Detalhes </Text>
      </TouchableOpacity>
    </View>
  );
  
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style= {{ fontSize: 18, fontWeight: 'bold' }}> Formulários </Text>
          </View>
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.docs}
            keyExtractor={item => item._id}
            renderItem={this.renderItem}
          />
        </View>
      </ScrollView>
    )
  }
}}
