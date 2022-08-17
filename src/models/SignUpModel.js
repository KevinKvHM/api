const { sequelize } = require('../database/conexcion');
const {DataTypes} = require('sequelize');

const SignUP = sequelize.define('singup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'El email necesita ser unico'
        },
        validate: {
            isEmail: {
                msg: 'Email no valido'
            },
            notEmpty: {
                msg: 'Ingrese un email'
            }
        }
    }
});
 module.exports = SignUP;