/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{backgroundColor: '#000000', flex: 1, flexDirection: "column"}}>
        <Image source= {{uri: 'https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo.png'}}
        style = {{ width: 300, height:300, alignSelf: 'center', marginVertical: 48}}/>

        <View style={{ borderRadius: 8, margin: 16, }}> 
          <Text style={{color: '#fff', fontSize: 14, marginTop: 8}}>E-mail</Text>
          <TextInput style= {{ color:'#000' ,backgroundColor: '#ffffff', height: 40, marginVertical: 16}}>Digite seu e-mail</TextInput>
        </View>
        <View style={{ borderRadius: 8, margin: 16, }}> 
          <View style= {{flexDirection: "row",  justifyContent: "space-between"}}>
            <Text style={{color: '#fff', fontSize: 14, marginTop: 8}}>Senha</Text>
            <Text style={{color: '#fff', textDecorationLine: "underline", fontSize: 16, fontWeight: "bold"}}>Esqueci minha senha</Text>
         </View>
          <TextInput style= {{ color:'#000' ,backgroundColor: '#ffffff', height: 40, marginTop: 16, marginBottom: 8}}>Digite sua senha</TextInput>
          <Text style={{color: '#Fff', fontSize: 12, fontWeight: "bold" }}>Senha incorreta</Text>
        </View>
      </View>
    </>
  );
};



export default App;
