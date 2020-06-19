// /**
//  * @format
//  */

//import {AppRegistry} from 'react-native';
//import App from './App';
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");

// //router
const perguntaController = require("./Dominio/Pergunta/PerguntaController");
const loginController = require("./Dominio/Login/LoginController");
const avaliacaoController = require("./Dominio/Avaliacao/AvaliacaoController");
const descricaoController = require("./Dominio/Descricao/DescricaoController");
const rankingController = require("./Dominio/Ranking/RankingController")
//const infoController = require("./Dominio/Info/InfoController");
const historicoController = require("./Dominio/Historico/HistoricoController")

// //match.js
const { create, all } = require('mathjs')
const config = { }
const math = create(all, config)

// //Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// //Conexão com Banco de Dados mysql
 connection.authenticate()
     .then(function() {
         console.log("Conectado com o BD")
     })
     .catch(function(err) {
         console.log("msgErro");
     })
     .done();

app.use("/",perguntaController);
app.use("/",loginController);
app.use("/",avaliacaoController);
app.use("/",descricaoController);
app.use("/",rankingController);
//app.use("/",infoController
app.use("/",historicoController);

// //Servidor
 app.listen(4000,function(erro){
     if(erro){
         console.log("Ocorreu um erro!");
     }else{
         console.log("Servidor iniciado com sucesso!");
     }
})
