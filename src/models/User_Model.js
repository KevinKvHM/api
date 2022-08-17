const {DataTypes} = require('sequelize');
const { sequelize } = require('../database/conexcion');
const Employees = require('./Personal_Model');

const Users = sequelize.define('users',
    {   
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING
        },

    },
        
    {
        timestamps: false,
        freezeTableName: true
    }
);

Employees.hasOne(Users,{
    foreignKey: 'id_employee',
    sourceKey: 'id'
});
Users.belongsTo(Employees, {
    foreignKey: 'id_employee',
    targetId: 'id'
});



module.exports = Users;