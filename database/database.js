const Sequelize = require('sequelize');

const connection = new Sequelize('bd5s','root','123456',{
    host: '35.198.50.240',
    port: 3306,
    dialect: 'mysql'
}); 

module.exports = connection;
