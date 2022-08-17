const { sequelize } = require('../database/conexcion');
const Tipo = require('../models/Roles_Model');


const createTipo = async (req, res) => {
    const {description} = req.body;  
    const newTipo = await Tipo.create(
        {
        description,
        }
    ); 
        res.json(newTipo);
};
const getTipos = async (req, res) => {
    const tipos = await Tipo.findAll()
    res.json(tipos)
};

const getTipo = async (req, res) => {
    const {id} = req.body;  
        const tipo = await Tipo.findOne(    
            {
                id
            }
        );    
        if (!tipo) {
            return res.status(404).json({message: 'the type user does nott exists'})
        }
              res.json(tipo);  
};

const deleteTipo = async (req, res) => {
    const {id} = req.params;

    await Tipo.destroy({
        where: {
            id,
        },
    });
    res.send('User delete successfull')
};
module.exports = {
    createTipo,
    getTipo,
    deleteTipo,
    getTipos
}