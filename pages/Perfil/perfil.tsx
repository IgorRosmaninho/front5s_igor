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
      fetch('http://localhost:4000/cadastro', requestOptions)
          .then(response => response.json())
          .then(data => mudarNome(data));
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

    
       return (
        
         <View style={{flex: 0.2, flexDirection: "column"}}>
           {nome.map(user => <Text> {user.User_name} </Text> )}
             
             </View>
       )}