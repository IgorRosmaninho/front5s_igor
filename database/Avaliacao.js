const Sequelize = require("sequelize");
const connection = require("./database");

/*Criação da Tabela Avaliação, com Form_id(text), Cost_center_id(text), Question_id_answer(array(int), Answer_average(array(float))*/
const Avaliacao = connection.define('avaliacoe',{
    Form_id:{
        type: Sequelize.TEXT,
        allowfull: false
    }

    Cost_center_id:{
        type: Sequelize.TEXT,
        allowfull: false
    }

    Question_id_answer:{
        type: Sequelize.ARRAY,
        allowfull: false
    }
    
    Answer_average:{
        type: Sequelize.ARRAY,
        allowfull: false
    }
});
/*Sincroniza com banco de dados e cria só se não houver uma tabela avaliaçoe*/
Avaliacao.sync({force: false}).then(() => {
    console.log("Tabela Avaliacao Criada")
});

module.exports = Avaliacao;