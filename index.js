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
const Login = require("./database/Login")
const Descricoes = require("./database/Descricoes")

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

//Teste de resposta no Servidor
app.get("/",function(req,res){
    res.send("Página Principal");
});


//Login5
app.post("/login", (req, res) => {        //Usando body-parser ou query?
    var User_name = req.body.User_name;    //Na requisição deve ser buscado o nome que consta no formulário
    var User_password = req.body.User_password;
    var User_email = req.body.User_email;
    var User_profile_photo = req.body.User_profile_photo;
    var User_role = req.body.User_role;

    //Colocando os dados na tabela de login
    Login.create({             
        User_name: User_name,
        User_password: User_password,
        User_email: User_email,
        User_profile_photo: User_profile_photo,
        User_role: User_role
    });                                           //.then para dar um redirect do back para o front
}); 

//Descricoes
app.post("/descricoes", (req, res) => {        //Usando body-parser ou query?
    var Descricao_id = req.body.Descricao_id
    var Descricao = req.body.Descricao;

    //Colocando os dados na tabela de login
    Descricoes.create({             
        Descricao: Descricao,
        Descricao_id: Descricao_id
    });                                           //.then para dar um redirect do back para o front
}); 


//Recebe dados do Front?? GENÉRICO Alterado para testar sem as respostas do front
app.get("/salvaravaliacao",(req,res) =>{  //app.post
    var Form_id = "Avaliador"; //req.body.Form_id;
    var Cost_center_id = "CC1"; //req.body.Cost_center_id;
    var Question_id_answer = {utilização: 1, limpeza: 2}; //req.body.Question_id_answer;

    res.send("Nota recebida! Form_id:" + Form_id + " Centro de Custo: " + Cost_center_id + "notas: " + Question_id_answer);
    //Envia a nota e descrição para o banco de dados
    Avaliacao.create({
        Form_id: Form_id,
        Cost_center_id: Cost_center_id,
        Question_id_answer: Question_id_answer,
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

//Servidor
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
