const { Router, request } = require('express')
const router = Router();
const { getPersonals, getPersonal, createPersonal, updateEmployee, deleteEmployee } = require('../controllers/Controller_Personal')

router.get('/api/v1/getAll-personals', getPersonals);
router.get('/api/v1/get-personal/:id', getPersonal);
router.post('/api/v1/create-personal', createPersonal);
router.put('/api/v1/update-personal/:id', updateEmployee);
router.delete('/api/v1/delete-personal/:id', deleteEmployee);

module.exports = router;