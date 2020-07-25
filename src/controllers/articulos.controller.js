const ArticulosDao = require('../dao/articulos.dao');

class ArticulosController {
    static async getArticulos(req, res) {
        let pagina = req.query.Pagina;
        if (pagina === undefined)
            pagina = 1;
        const articulos = await ArticulosDao.getByNombreActivo(req.query.Nombre, req.query.Activo);
        res.status(200).json({
            Lista: articulos.slice(pagina * 10, pagina * 10 + 10),
            RegistrosTotal: articulos.length
        });
    }

    static async getArticulosById(req, res) {
        const articulo = await ArticulosDao.getByIdArticulo(req.params.id);
        res.status(200).json(articulo);
    }

    static async postArticulos(req, res) {
        const {
            Nombre,
            Precio,
            CodigoDeBarra,
            IdArticuloFamilia,
            Stock,
            FechaAlta,
            Activo
        } = req.body;
        const articulo = await ArticulosDao.Insert(Nombre, Precio, CodigoDeBarra, IdArticuloFamilia, Stock, FechaAlta, Activo);
        res.send().status(200);
    }

    static async putArticulos(req, res) {
        const {
            Nombre,
            Precio,
            CodigoDeBarra,
            IdArticuloFamilia,
            Stock,
            FechaAlta,
            Activo
        } = req.body;
        const articulo = await ArticulosDao.Update(req.params.id, Nombre, Precio, CodigoDeBarra, IdArticuloFamilia, Stock, FechaAlta, Activo);
        res.send().status(204);
    }

    static async putArticulosActivarDesactivar(req, res) {
        const response = await ArticulosDao.ActivarDesactivar(req.params.id)
        res.send().status(204);
    }
}

module.exports = ArticulosController;