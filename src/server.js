//Imports
const {sequelize} = require('./database/conexcion');
const dotenv = require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express()

//const jwt = require('jsonwebtoken')
//middleware-------------------------------------

app.use(express.json()); //convierte los archivos json a javascript para su manipulacion
app.use(express.urlencoded({extended: false}));//Acepta datos simples de un formulario

// routes ---------------------------------------
//app.use(require('./routes/personal_route'));
app.use(require('./routes/personal_route'));
app.use(require('./routes/Tipo_User_route'));
app.use(require('./routes/User_Route'));

//server running -------------------------------- 
const PORT = process.env.PORT || 4000;
//app.set('port', process.env.PORT || 9000)
 
async function main(){
    try {
        await sequelize.sync({force: true});
        console.log('Connection has been established successfully.');
        app.listen(PORT, ()=>{
            console.log('server running on port: ' + PORT)
         } )
    } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

 main();