const {
    Router
} = require('express');
const ArticulosController = require('../controllers/articulos.controller');

const router = Router();
router.get('/articulos', ArticulosController.getArticulos);
router.get('/articulos/:id', ArticulosController.getArticulosById);
router.post('/articulos', ArticulosController.postArticulos);
router.put('/articulos/:id', ArticulosController.putArticulos);
router.delete('/articulos/:id', ArticulosController.putArticulosActivarDesactivar);

module.exports = router;