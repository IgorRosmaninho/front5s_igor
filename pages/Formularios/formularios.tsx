import React, { Component } from 'react';
import {hist5sDESC, hist5sASC, hist3sDESC} from '../api_back';
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
    ScrollView,
    
  } from 'react-native';
  import styles from '../style/styles'

  export default class Formularios extends Component{

    state = {
      docs: [],
      refreshing: false
    };

    

    componentDidMount() {
      this.fetchData();
      }
      
      fetchData = () => {
        hist5sDESC.get('')
        .then(response => {
          this.setState({
           docs: response.data,
           refreshing: false
          });

          console.log(response.data)
          console.warn("Data", this.state.docs);
      })
      .catch(error => console.log(error));
      }
    

      
      handleRefresh = () => {
        this.setState(
          {
            refreshing: true
          },
          () => {
            this.fetchData();
          })
      }
  

render() {
  const {docs} = this.state;
  const { navigation } = this.props;
  return (
    //<ScrollView>
      <View style={styles.container}>
        <View>
          
            </View>
        <FlatList
          // contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={(item) => item.id}
          refreshing = {this.state.refreshing}
          onRefresh = {this.handleRefresh}
          renderItem={({item}) => (
            <View>
              <Text style={styles.h2}>Centro de custo: {item.Cost_center_id}</Text>
              <Text style={styles.bodyText}>Nota 5S: {(item.Answer_average_5s*100/5).toFixed(1)}%</Text>
              <Text style={styles.bodyText}>Data da avaliação: {item.createdAt}</Text>

              <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("FormulariosSensos",{id: item.id, Cost_center_id: item.Cost_center_id, Answer_average_5s: item.Answer_average_5s, createdAt: item.createdAt})}>
                <Text style={styles.secondaryButtonText}> Detalhes </Text>
              </TouchableOpacity>
              <View style={styles.divisor}/>
            </View>
          )}
        />
      </View>
    //</ScrollView>
  )
}
}
