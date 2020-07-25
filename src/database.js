const {
    Pool
} = require('pg');
const config = require('./config/config');

const pool = new Pool({
    host: config.DB.host,
    user: config.DB.user,
    password: config.DB.password,
    database: config.DB.database,
    port: config.DB.port
});

module.exports = pool;