const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");

var Question_id_answer_d

app.get("/avaliacao/disciplina",(req,res) =>{  //app.post
    var Form_id = "Avaliador"; //req.body.Form_id;
    var Cost_center_id = "CC1"; //req.body.Cost_center_id;
    Question_id_answer_d = "as" ;//{disciplina: 5}; //req.body.Question_id_answer;
    res.send("Nota recebida! Form_id:" + Form_id + " Centro de Custo: " + Cost_center_id + "notas: " + Question_id_answer_d);
    console.log(Question_id_answer_d)
});

console.log(Question_id_answer_d)

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
