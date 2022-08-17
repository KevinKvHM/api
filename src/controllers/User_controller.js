const { useCLS } = require('sequelize');
const { sequelize } = require('../database/conexcion');
const Users = require("../models/User_Model");

const createUser = async (req, res) => {
  const {username, id_employee, id_tipo_user }= req.body;
  const newUser = await Users.create({
    username,
    id_employee,
    id_tipo_user
  });
  
  res.json(newUser)
};

const getAllUsers = async (req, res) => {
  const users = await Users.findAll();
  res.json(users);
}

const getUser = async (req, res) => {
  const {targetId} = req.body;
  const users = await Users.findOne();
  
  if (!users) {
    return res.status(404).json({message: 'the type user does nott exists'})
}
  res.json(users);

}



module.exports = {
  createUser,
  getAllUsers,
  getUser
}