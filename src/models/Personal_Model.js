const {DataTypes} = require('sequelize');
const { sequelize } = require('../database/conexcion');

const Employees = sequelize.define('employees',
    {   
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        fulname: {
            type: DataTypes.STRING,
            allNuull: false
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
        },

        oficina: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

/*
Employees.hasOne(Users, {
    foreignKey: 'id_employee',
    sourceKey: 'id'
});

Users.belongsTo(Employees,{
    foreignKey: 'id_tipo_user',
    targetId: 'id'
});
*/

module.exports = Employees;