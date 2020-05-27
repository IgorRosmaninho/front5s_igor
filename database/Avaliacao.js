const Sequelize = require("sequelize");
const connection = require("./database");

/*Criação da Tabela Avaliação, com Form_id(text), Cost_center_id(text), Question_id_answer(array(int), Answer_average(array(float))*/
const Avaliacao = connection.define('avaliacoe',{
    Form_id:{
        type: Sequelize.TEXT,
        allownull: false
    }

    Cost_center_id:{
        type: Sequelize.TEXT,
        allownull: false
    }

    Question_id_answer:{
        type: Sequelize.ARRAY,
        allownull: false
    }
    
    Answer_average:{
        type: Sequelize.ARRAY,
        allownull: false
    }
});
/*Sincroniza com banco de dados e cria só se não houver uma tabela avaliaçoe*/
Avaliacao.sync({force: false}).then(() => {
    console.log("Tabela Avaliacao Criada")
});

module.exports = Avaliacao;