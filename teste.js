const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");
const avaliacao = require("./Modules/Avaliacao/mAvaliacao")


const Avaliacao = require("./database/Avaliacao");
const Login = require("./database/Login");

//match.js
const { create, all } = require('mathjs')
const config = { }
const math = create(all, config)

//Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Conexão com Banco de Dados mysql
connection.authenticate()
    .then(function() {
        console.log("Conectado com o BD")
    })
    .catch(function(err) {
        console.log("msgErro");
    })
    .done();


avaliacao()


app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
