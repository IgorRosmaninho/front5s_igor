function avaliacao(){
//define Form_id, Cost_center_id ,Question_id_answer (separar em 3 variáveis)

const express = require("express");
const app = express();
const connection = require("c:/Users/Dell/Desktop/POLI/2020 - 1 semestre/Produtos 5S/GIT HUB/5S/mercedes_5s/database/database");
const bodyParser = require("body-parser");
const Avaliacao = require("c:/Users/Dell/Desktop/POLI/2020 - 1 semestre/Produtos 5S/GIT HUB/5S/mercedes_5s/database/Avaliacao");



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

var Form_id = 0

var Cost_center_id = 0

var Question_id_answer = {
    Question_id_answer_u: 0,
    Question_id_answer_o: 0,
    Question_id_answer_l: 0,
    Question_id_answer_p: 0,
    Question_id_answer_d: 0 
}

//Recebe dados do Front (utilização) e armazena no Json (Question_id_answer)
app.post("/avaliacao/utilizacao",(req,res) =>{  //app.post
    Form_id = req.body.Form_id;
    Cost_center_id = req.body.Cost_center_id;
    var Question_id_answer_u = req.body.Question_id_answer_u;

    //Question_id_answer.Form_id = Form_id;
    //Question_id_answer.Cost_center_id = Cost_center_id;
    Question_id_answer.Question_id_answer_u = Question_id_answer_u

    res.send("ta enviando do modulo ")
    //res.send("Nota recebida! Form_id:" + Form_id + " Centro de Custo: " + Cost_center_id + " notas: " + Question_id_answer_u);
});
}

module.exports = avaliacao
