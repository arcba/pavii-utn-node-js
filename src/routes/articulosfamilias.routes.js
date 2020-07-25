const {
    Router
} = require('express');
const ArticulosFamiliasController = require('../controllers/articulosfamilias.controller');

const router = Router();
router.get('/articulosfamilias', ArticulosFamiliasController.getArticulosFamilias);

module.exports = router;