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
const Avaliacao = require("./database/Avaliacao");
const Login = require("./database/Login");
const Pergunta = require("./database/perguntas");
const Descricoes = require("./database/Descricoes");

//match.js
const { create, all } = require('mathjs')
const config = { }
const math = create(all, config)

//Body-Parser
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


//Recebendo dados do login e salvando no BD   
app.post("/cadastro", (req, res) => {   
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
    }); //.then para dar um redirect do back para o front
    res.json({ status: 'Usuário cadastrado!'})
}); 


//Verificando login
app.get("/login", (req, res) => {
    var email = req.body.User_email;
    var password = req.body.User_password;
    Login.findOne({
        where: {User_email: email}  //Verificando se há o email na coluna User_email
    }).then(logins => {            //A variável logins recebe o resultado de .findOne: se encontrar recebe o JSON, caso contrário recebe undefined
        if (logins != undefined){
            if(password == logins.User_password){
                res.send(true);
            }else{
                res.send(false); 
            }
        }else{
            res.sendStatus(404); //Email não encontrado
        }
    })
});

//Será melhor enviar pergunta por pergunta? Ou enviar um JSON com as 4 perguntas por página?
app.post("/pergunta", (req, res) => {
    var titulo = req.body.titulo;
    Pergunta.findOne({
        where: {titulo : titulo}  //Encontrando a pergunta com o título 
    }).then(pergunta => {
        if(pergunta != undefined){
            res.send(pergunta);
        }else{
            res.sendStatus(404);  //Não encontrado
        }
    })
});

//Mudar o formato da tabela? Para códigos do tipo 1.1.2, onde 1.1 se refere à pergunta e 2 à nota
app.get("/descricao/:descricao_id/:nota", (req, res) => {
    var descricao_id = req.params.descricao_id;  //Recebe o id da pergunta
    var nota = parseInt(req.params.nota) - 1;
    Descricoes.findAll({
        attributes: [descricao_id]
    }).then(array => {
        console.log(array);
        //descricao = array.nota.descricao;
        //res.send(descricao);
    })
});

//define Form_id 
var Form_id = 0

//User_id 
var User_id = 0 

//Cost_center_id 
var Cost_center_id = 0

//Question_id_answer 
var Question_id_answer = {
    Question_id_answer_u: 0,
    Question_id_answer_o: 0,
    Question_id_answer_l: 0,
    Question_id_answer_p: 0,
    Question_id_answer_d: 0 
}

//Recebe dados do front de Form_id User_id e Cost_center_id
app.post("/avaliacao/id",(req,res) =>{  
    Form_id = req.body.Form_id;
    User_id = req.body.User_id;
    Cost_center_id = req.body.Cost_center_id;
    
    res.send("Form_id: " + Form_id + " User_id: " + User_id + " Cost_center_id: " + Cost_center_id)
});

//Recebe dados do Front (utilização) e armazena no Json (Question_id_answer)
app.post("/avaliacao/utilizacao",(req,res) =>{  
    var Question_id_answer_u = req.body.Question_id_answer_u;
    Question_id_answer.Question_id_answer_u = Question_id_answer_u
    res.send(Question_id_answer)
});

//Recebe dados do Front (organização) e armazena no Json (Question_id_answer)
app.post("/avaliacao/organizacao",(req,res) =>{  //app.post
    var Question_id_answer_o = req.body.Question_id_answer_o;
    Question_id_answer.Question_id_answer_o = Question_id_answer_o
    res.send(Question_id_answer)
});

//Recebe dados do Front (limpeza) e armazena no Json (Question_id_answer)
app.post("/avaliacao/limpeza",(req,res) =>{  //app.post
    var Question_id_answer_l = req.body.Question_id_answer_l;
    Question_id_answer.Question_id_answer_l = Question_id_answer_l
    res.send(Question_id_answer)
});

//Recebe dados do Front (padronização) e armazena no Json (Question_id_answer)
app.post("/avaliacao/padronizacao",(req,res) =>{  //app.post
    var Question_id_answer_p = req.body.Question_id_answer_p;
    Question_id_answer.Question_id_answer_p = Question_id_answer_p
    res.send(Question_id_answer)
});

//Recebe dados do Front (disciplina) e armazena no Json (Question_id_answer)
app.post("/avaliacao/disciplina",(req,res) =>{  //app.post
    var Question_id_answer_d = req.body.Question_id_answer_d;
    Question_id_answer.Question_id_answer_d = Question_id_answer_d
    res.send(Question_id_answer)
});

// define Answer_average
var Answer_average = {
    Answer_average_u : 0,
    Answer_average_o : 0,
    Answer_average_l : 0,
    Answer_average_p : 0,
    Answer_average_d : 0,
    Answer_average_3s : 0,
    Answer_average_5s : 0
};

//Calcula Média de cada S e 5S e 3S
app.post("/calculamedia",(req,res) =>{
    var Answer_average_u = math.mean(Question_id_answer.Question_id_answer_u);
    var Answer_average_o = math.mean(Question_id_answer.Question_id_answer_o);
    var Answer_average_l = math.mean(Question_id_answer.Question_id_answer_l);
    var Answer_average_p = math.mean(Question_id_answer.Question_id_answer_p);
    var Answer_average_d = math.mean(Question_id_answer.Question_id_answer_d);

    Answer_average.Answer_average_u = Answer_average_u
    Answer_average.Answer_average_o = Answer_average_o
    Answer_average.Answer_average_l = Answer_average_l
    Answer_average.Answer_average_p = Answer_average_p
    Answer_average.Answer_average_d = Answer_average_d
    Answer_average.Answer_average_3s = math.mean(Answer_average_u,Answer_average_o,Answer_average_l)
    Answer_average.Answer_average_5s = math.mean(Answer_average_u,Answer_average_o,Answer_average_l,Answer_average_p,Answer_average_d)

    res.send(Answer_average)
});

//Salva no Banco de dados
app.post("/salvabd", (req,res) => {
    Avaliacao.create({
        Form_id: Form_id,
        User_id: User_id,
        Cost_center_id: Cost_center_id,
        Question_id_answer: Question_id_answer,
        Answer_average: Answer_average
    });
    res.send("enviado com sucesso")
});

//Envia dados do BD pra Rota
app.get("/resultado",(req,res) => {
    Avaliacao.findAll( {raw: true, order:[
        ['id','DESC'] //DESC = decrescente || ASC = crescente
    ]}).then(avaliacao => {

    res.json({             //Manda todas as notas da avaliação para o front, em ordem (mais recente primeiro).No front, iremos Usar fetch aqui?*/
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
