import React, { Component } from 'react';
//import api from '../Formularios/api';
//import { ScrollView } from 'react-native-gesture-handler';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Button,
    ScrollView
  } from 'react-native';
  import styles from '../style/styles'

  export default class Formularios extends Component{

    
//     const state = {
//       docs: []
//     };

//     componentDidMount() {
//       this.loadHistorico();
//     }
   
//     loadHistorico = async () => {
//        const response = await api.get('');
      
//      const { docs } = response.data;

//      this.setState({ docs });
//  };

  renderItem (item){
    <View>
      <Text style={styles.h2}>{item.Cost_center_id}</Text>
      <Text style={styles.bodyText}>{item.Answer_average_x}</Text>
      <Text style={styles.bodyText}>Data da avaliação: {item.createdAt}</Text>

      <TouchableOpacity style={styles.primaryButton} onPress={() => {}}>
        <Text style={styles.bodyText}> Detalhes </Text>
      </TouchableOpacity>
    </View>
  };

  
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <FlatList
            contentContainerStyle={styles.list}
            data={this.state.docs}
            keyExtractor={item => item._id}
            renderItem={this.renderItem}
          /> */}
        </View>
      </ScrollView>
    )
  }
}
