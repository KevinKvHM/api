const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(
    'prueba', 
    'postgres', 
    '1234',  
    {
        host: 'localhost',
        dialect: 'postgres',
    })

module.exports = {
    sequelize
}


/*
const { Pool } = require('pg');

const mysql = new Pool(
    {
    
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'prueba',
    port: '5432'
    }
);

module.exports = {
    mysql
};
*/