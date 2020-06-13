const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");
//const Descricoes = require("./database/CriaDescricoes")

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

app.get("/descricao",(req,res) => {
    var s = "5.1"
    //for (var i = s+ 0.1 , i< 5.5, i += 0.1)
    descricoes.findAll({
        where: {descricao_id: s}
    }).then(descricao => {
        console.log(descricao)
        res.json({
            descricao: descricao
    
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