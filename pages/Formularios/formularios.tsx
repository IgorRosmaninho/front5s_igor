import React, { Component } from 'react';
import api from '../Formularios/api';

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
import { ScrollView } from 'react-native-gesture-handler';


//async function postData(url = '', data = {}) { 
//  const response = await fetch(url, {
//    method: 'POST', // *GET, POST, PUT, DELETE, etc.
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(data) // body data type must match "Content-Type" header
//  });
//  return response.json(); // parses JSON response into native JavaScript objects
//}



  export default function Formularios({navigation}) {

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

    //class Formularios extends Component{
    const state = {
      docs: []
    };

    function componentDidMount() {
      this.loadHistorico();
    }
   
  //    function loadHistorico  async () => {
  //     const response = await api.get("/historico");
      
  //     const { docs } = response.data;

  //     this.setState({ docs });
  // };

  function renderItem (item){
    <View>
      <Text style={styles.historicoTitle}>{item.title}</Text>
      <Text style={styles.historicoDescription}>{item.description}</Text>

      <TouchableOpacity style={styles.historicoButton} onPress={() => {}}>
                  <Text style={styles.historicoButtonText}> Detalhes </Text>
      </TouchableOpacity>
    </View>
  };
  
  
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
