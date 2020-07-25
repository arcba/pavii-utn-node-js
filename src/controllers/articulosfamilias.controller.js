const ArticulosFamiliasDao = require("../dao/articulosfamilias.dao");

class ArticulosFamiliasController {
  static async getArticulosFamilias(req, res) {
    let articulosFamilias = await ArticulosFamiliasDao.getAll();
    res.status(200).json(articulosFamilias);
  }
}
module.exports = ArticulosFamiliasController;
