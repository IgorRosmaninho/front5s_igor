import React from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';

  // o data da funcao fetch é um JSON da forma {
  //  email: "emal do usuario"
  //  senha: "1234"
  //   }
  
  async function postData(url = '', data = {}) { 
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
})
  }

  var loginData = {   //Teste
    email: "teste@teste.com",
    senha: "teste",
  };


  postData('/login', loginData)

  export default function Login({navigation}) {

   
    const validador = (email:string) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         if (regex.test(email)) {
           setEmailError(false)
         } else {
           setEmailError(true)
         }
       }
       const [emailError, setEmailError] = React.useState<boolean>(false);
       return (
         <>
           <View style={{backgroundColor: '#000000', flex: 1, flexDirection: "column"}}>
             <Image source= {{uri: 'https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo.png'}}
             style = {{ width: 300, height:300, alignSelf: 'center', marginVertical: 48}}/>
     
             <View style={{ borderRadius: 8, marginHorizontal: 48, }}> 
               <Text style={{color: '#fff', fontSize: 14, marginTop: 8}}>E-mail</Text>
               <TextInput onChangeText= {validador}
               style= {{ color:'#000' ,backgroundColor: '#ffffff', height: 48, marginVertical: 16, fontSize: 16, padding: 12,}}>Digite seu e-mail</TextInput>
                { emailError && <Text style={{color: '#Fff', fontSize: 12, fontWeight: "bold" }}> Email inválido</Text>}
             </View>
             <View style={{ borderRadius: 8, marginHorizontal: 48, }}> 
                 <Text style={{color: '#fff', fontSize: 14, marginTop: 8}}>Senha</Text>
               <TextInput style= {{ color:'#000' ,backgroundColor: '#ffffff', height: 48, marginTop: 16, marginBottom: 8, fontSize: 16, padding: 12}}>Digite sua senha</TextInput>
               <Text style={{color: '#Fff', fontSize: 12, fontWeight: "bold" }}>Senha incorreta</Text>
             </View>
             <View style={{ justifyContent: 'center', alignSelf: 'center', width: '100%'}}>
               <TouchableOpacity style={{backgroundColor: '#fff', height: 48, color:'#000', justifyContent: 'center', margin: 48,}} 
                 onPress={() => navigation.navigate ("Assessment") }
                >
                 <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}} > Entrar</Text>
               </TouchableOpacity>
               <Text style={{color: '#fff', textDecorationLine: "underline", fontSize: 16, fontWeight: "bold", alignSelf: "center",}}>Esqueci minha senha</Text>
               </View>
           </View>
         </>

      )

  }