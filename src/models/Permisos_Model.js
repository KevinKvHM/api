const {DataTypes} = require('sequelize');
const { sequelize } = require('../database/conexcion');
const Role = require('./Roles_Model');

const Permisos = sequelize.define('permisos',
    {   
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
            type: DataTypes.STRING,
            allNuull: false,
            unique: true
        },
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);
/*
Permisos.belongsToMany(Role,{
    foreignKey: 'id_permiso',
    sourceKey: 'id'
});
*/
module.exports = Permisos;