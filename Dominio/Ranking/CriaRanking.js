const Sequelize = require("sequelize");
const connection = require("../../database/database");

/*Criação da Tabela Avaliação, com Form_id(text), Cost_center_id(text), Question_id_answer(array(int), Answer_average(array(float))*/
const Ranking = connection.define('ranking',{
    Cost_center_id:{
        type: Sequelize.TEXT,
        allownull: false
    },

    Average_u:{
        type: Sequelize.FLOAT, 
        allownull: false
    },

    Average_o:{
        type: Sequelize.FLOAT, 
        allownull: false
    },
    
    Average_l:{
        type: Sequelize.FLOAT, 
        allownull: false
    },

    Average_p:{
        type: Sequelize.FLOAT, 
        allownull: false
    },
    
    Average_d:{
        type: Sequelize.FLOAT, 
        allownull: false
    },

    Average_3s:{
        type: Sequelize.FLOAT, 
        allownull: false
    },
    
    Average_5s:{
        type: Sequelize.FLOAT, 
        allownull: false
    }
});

/*
//Sincroniza com banco de dados e cria só se não houver uma tabela ranking
Ranking.sync({force: false}).then(() => {
    console.log("Tabela Ranking Criada")
});
*/

module.exports = Ranking;