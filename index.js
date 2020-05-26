/**
 * @format
 */
/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);*/

const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");
const Avaliacao = require("./database/Avaliacao");

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

//Servidor
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})

//Teste de resposta no Servidor
app.get("/",function(req,res){
    res.send("TESTE");
});



//Recebe dados do Front?? GENÉRICO
app.post("/salvaravaliacao",(req,res) =>{  //app.post
    var nota = req.body.nota;
    var descricao = req.body.descricao;
    res.send("Nota recebida! nota " + nota + " descricao " + descricao);
    //Envia a nota e descrição para o banco de dados
    Avaliacao.create({
        nota: nota,
        descricao: descricao
    });
});

//Envia dados pro Front?? GENÉRICO
app.get("/resultado",(req,res) => {
    Avaliacao.findAll( {raw: true, order:[
        ['id','DESC'] //DESC = decrescente || ASC = crescente
    ]}).then(avaliacao => {

    res.json({             /*Manda todas as notas da avaliação para o front,
                            em ordem (mais recente primeiro).
                            No front, iremos Usar fetch aqui?*/
        avaliacao: avaliacao
        });
    
    }); 
});
