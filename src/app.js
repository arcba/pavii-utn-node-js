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

//configurar las variables de entorno ver mas en => https://www.youtube.com/watch?v=U6st9-lNUyY
dotenv.config();

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
//middleware para sanitizar
app.use(expAutoSan.allUnsafe);
//para asegurar la aplicacion
app.use(helmet());

//routes
app.get("/", (req, res) => {
  res.send("Hola mundo NODE con JS y Postgres").status(200);
});

app.get("/test", (req, res) => {
  res.send(`test 123`).status(200);
});

app.use(articulosRoutes);
app.use(articulosFamiliasRoutes);

module.exports = app;
