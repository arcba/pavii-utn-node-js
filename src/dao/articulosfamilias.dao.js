const pool = require('../database');

class ArticulosFamiliasDao {
    static async getAll() {
        try {
            const response = await pool.query('SELECT idarticulofamilia as "IdArticuloFamilia", nombre as "Nombre" FROM ArticulosFamilias ');
            return response.rows;
        } catch (error) {
            return null;
        }
    }
}

module.exports = ArticulosFamiliasDao;