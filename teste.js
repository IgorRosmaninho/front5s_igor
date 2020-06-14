const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");
const Descricoes = require("./database/CriaDescricoes")

//match.js
const { create, all } = require('mathjs')
const config = {}
const math = create(all, config)

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Conexão com Banco de Dados mysql
connection.authenticate()
    .then(function () {
        console.log("Conectado com o BD")
    })
    .catch(function (err) {
        console.log("msgErro");
    })
    .done();

var descricaoJson = {};


app.post("/descricao", (req, res) => {
    (async () =>{
        descricaoJson = {};
        var s = req.body.s;
        var i = 0
        var ii = 0

        for (i = s + 0.1; i < s + 0.49; i += 0.1) {
            ii = i.toFixed(1)
            await Descricoes.findAll({
                where: { descricao_id: ii 
                },
                order: [
                    ['descricao_id', 'ASC'],
                    ['nota', 'ASC'],
                ],
                attributes: ['descricao_id', 'nota','descricao']
            } 
            ).then(descricao => {
                descricaoJson[ii] = descricao
            });
        };
        return res.json(descricaoJson);
    })()
});

//Servidor
app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})