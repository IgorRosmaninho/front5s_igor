const Sequelize = require("sequelize");
const connection = require("./database");

/*Criação da Tabela Avaliação, com nota (inteiro) e descrição(text)*/
const Avaliacao = connection.define('avaliacoe',{
    nota:{
        type: Sequelize.INTEGER,
        allowfull: false
    },
    descrição:{
        type: Sequelize.TEXT,
        allowfull: false
    }
});
/*Sincroniza com banco de dados e cria só se não houver uma tabela avaliaçoe*/
Avaliacao.sync({force: false}).then(() => {
    console.log("Tabela Avaliacao Criada")
});

module.exports = Avaliacao;