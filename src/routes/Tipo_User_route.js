const { Router, request } = require('express');
const { getTipo, createTipo, deleteTipo, getTipos } = require('../controllers/Tipo_User_Controller');
const router = Router();

router.get('/api/v1/get-tipo_user/:id', getTipo);
router.get('/api/v1/getAll-tipo_users', getTipos);
router.post('/api/v1/create-tipo_user', createTipo);
router.delete('/api/v1/delete-tipo_user/:id', deleteTipo);

module.exports = router;