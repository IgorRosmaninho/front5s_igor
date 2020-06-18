import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Button,
  } from 'react-native';


  
  export default function Perfil({navigation}) {
   
    const [nome, mudarNome] = React.useState([]);
    React.useEffect(() => {
      // POST request using fetch inside useEffect React hook
      const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          
      };
      fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
          .then(response => response.json())
          .then(data => mudarNome(data));
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

    
       return (
        
        //  <View>
        //    {nome.map(user => <Text> {user.title} </Text> )}
        //      <Text>Oi</Text>
        //      </View>
        <View>
          <Text>Oi</Text>
        </View>
       )}