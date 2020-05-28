const Sequelize = require("sequelize");
const connection = require("./database")

//Criando tabela 'login' no banco de dados 
const Login = connection.define('login',{
    User_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    User_password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    User_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    User_profile_photo: {
        type: Sequelize.STRING     //Foto está opcional e entrando no BD como string (url)
    },
    User_role: {
        type: Sequelize.STRING,    //Opcional?
        allowNull: false     
    }
}); //É possível passar um último objeto opções {} (vazio). Não sei ainda o porquê

//Sincronizando ao BD
Login.sync({force: false}).then(() => {
    console.log("Tabela de login criada.")
});

module.exports = Login;