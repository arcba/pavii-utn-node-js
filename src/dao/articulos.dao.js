const pool = require('../database');

class ArticulosDao {

    static async Insert(Nombre, Precio, CodigoDeBarra, IdArticuloFamilia, Stock,
        FechaAlta, Activo) {
        const response = await pool.query('insert into Articulos(Nombre, Precio, CodigoDeBarra, IdArticuloFamilia, Stock, FechaAlta, Activo) values ($1, $2, $3, $4, $5, $6, $7)', [Nombre, Precio, CodigoDeBarra, IdArticuloFamilia, Stock, FechaAlta, Activo]);
        if (response.rowCount == 0)
            return null;
        return this.getByIdArticulo(response.rows[0].usuarioid);
    }
    static async Update(IdArticulo, Nombre, Precio, CodigoDeBarra, IdArticuloFamilia, Stock,
        FechaAlta, Activo) {
        const response = await pool.query('update Articulos set Nombre = $1, Precio = $2, CodigoDeBarra = $3, IdArticuloFamilia = $4, Stock = $5, FechaAlta = $6, Activo = $7 where IdArticulo = $8', [Nombre, Precio, CodigoDeBarra, IdArticuloFamilia, Stock, FechaAlta, Activo, IdArticulo]);
        if (response.rowCount == 0)
            return null;
        return this.getByIdArticulo(response.rows[0].usuarioid);
    }

    static async ActivarDesactivar(IdArticulo) {
        const response = await pool.query('update Articulos set Activo = not Activo where IdArticulo = $1', [IdArticulo]);
        if (response.rowCount == 0)
            return null;
        return this.getByIdArticulo(response.rows[0].usuarioid);
    }
    static async getByNombreActivo(nombre, activo) {
        try {
            let params = new Array();
            let i = 0;
            let sql = 'SELECT idarticulo as "IdArticulo", Nombre as "Nombre", Precio as "Precio", CodigoDeBarra as "CodigoDeBarra", IdArticuloFamilia as "IdArticuloFamilia", Stock as "Stock", FechaAlta as "FechaAlta", Activo as "Activo" FROM Articulos where 1=1 ';
            if (nombre != undefined && nombre != '') {
                sql += " and lower(nombre) like lower($" + i + ") ";
                i++;
                params.push('%' + nombre + '%');
            }
            if (activo != undefined) {
                sql += " and activo = $" + i;
                i++;
                params.push(activo);
            }
            sql += "Order by nombre";
            const response = await pool.query(sql, params);
            return response.rows;
        } catch (error) {
            return null;
        }
    }

    static async getByIdArticulo(idArticulo) {
        try {
            let response = await pool.query('SELECT idarticulo as "IdArticulo", Nombre as "Nombre", Precio as "Precio", CodigoDeBarra as "CodigoDeBarra", IdArticuloFamilia as "IdArticuloFamilia", Stock as "Stock", FechaAlta as "FechaAlta", Activo as "Activo" FROM Articulos where IdArticulo = $1', [idArticulo]);
            return response.rowCount == 1 ? response.rows[0] : null;
        } catch (error) {
            return null;
        }
    }
}

module.exports = ArticulosDao;