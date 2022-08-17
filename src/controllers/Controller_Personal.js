const Employees = require('../models/Personal_Model');

const getPersonals = async (req, res) => {
    
  const employees =  await Employees.findAll(); 
        res.json(employees);  
      
};
const getPersonal = async (req, res) => {
    const { id } = req.params;
    const employees =  await Employees.findOne({
        where: {
            id
        }
    }); 

    if (!employees) {
        return res.status(404).json({message: 'employees does nott exists'})
    }
          res.json(employees);  
        
  };
const createPersonal = async (req, res) => {
    const {fulname, username, puesto} = req.body;  
        const newEmployeed = await Employees.create(    
            {
                fulname,
                username,
                puesto
            }
        );    
        res.json(newEmployeed);
   

};

const updateEmployee = async (req, res) => {
    const {id} = req.params;

    
    const employees = await Employees.findOne({
        where: {id}, 
    });

    employees.set(req.body);
    await employees.save();
    res.json(employees)
};

const deleteEmployee = async (req, res) => {
    const {id} = req.params;
        await Employees.destroy({
            where: {
                id,
            },
        }  
        );
        res.send('User delete successfull')
};
module.exports = {
    getPersonal,
    getPersonals,
    createPersonal,
    updateEmployee,
    deleteEmployee 
}