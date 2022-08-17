const {Sequelize, DataTypes, Model, Association, QueryTypes} = require('sequelize');
const { sequelize } = require('../database/conexcion');
const Permisos = require('./Permisos_Model');
const Users = require('./User_Model');

const Role = sequelize.define('roles',
    {   
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.ENUM('admin', 'user',)
        }

    },
    {
        timestamps: false,
        freezeTableName: true
    },

);

/*Role.hasMany(Users, {
    foreignKey: 'id_user',
    sourceKey: 'id'
});*/
/*
Role.belongsTo(Users, {
    foreignKey: 'id_user',
    targetId: 'id'
});
Role.belongsToMany(Permisos,{
    foreignKey: 'id_permiso',
    sourceKey: 'id'
});*/

module.exports = Role;