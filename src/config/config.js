module.exports = {
  DB: {
    host: process.env.POSTGREDB_HOST || "bitgocba.duckdns.org",
    user: process.env.POSTGREDB_USER || "pavii",
    password: process.env.POSTGREDB_PASSWORD || "pav2utn",
    database: process.env.POSTGREDB_DATABASE || "firstapi",
    port: Number(process.env.POSTGREDB_PORT || 5432)
  }
};
