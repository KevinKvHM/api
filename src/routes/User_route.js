const { Router, request } = require('express');
const { createUser, getAllUsers } = require('../controllers/user_controller');
const router = Router();
//const { findAll } = require('../controllers/User_controller')

router.get('/api/v1/getAll-users', getAllUsers);
router.get('/api/v1/getAll-users/:id', getAllUsers);
router.post('/api/v1/create-users', createUser);

module.exports = router;