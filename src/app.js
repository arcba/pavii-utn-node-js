const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

const articulosRoutes = require("./routes/articulos.routes");
const articulosFamiliasRoutes = require("./routes/articulosfamilias.routes");
const expAutoSan = require("express-autosanitizer");
const helmet = require("helmet");

//inicializaciones
const app = express();
dotenv.config(); //configurar las variables de entorno ver mas en => https://www.youtube.com/watch?v=U6st9-lNUyY

//settings
app.set("port", process.env.PORT || 8080);

//middewares
app.use(morgan("dev"));
app.use(cors());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(expAutoSan.allUnsafe); //middleware para sanitizar
app.use(helmet()); //para asegurar la aplicacion

//routes
app.get("/", (req, res) => {
  res.send("PAVII - FRC Hola mundo NODE con JS y Postgres").status(200);
});
app.use(articulosRoutes);
app.use(articulosFamiliasRoutes);

module.exports = app;
