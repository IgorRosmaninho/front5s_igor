const connection = require("./database");
const Sequelize = require("sequelize");
const Descricoes = connection.use("descricoes");



Descricoes.findAll({
    }).then(descricao => {
    console.log(descricao)
    res.json({
        descricao: descricao

    });
 });
