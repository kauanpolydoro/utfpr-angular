const express = require("express");
const cors = require("cors");
const filmeRouter = require("./api/categorias");

const API_PORT = 3000;
const API_PATH = 'api';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

app.use(`/${API_PATH}/categorias`, filmeRouter);

app.listen(API_PORT, () => {
  console.log(`Servidor executando em http://localhost:${API_PORT}/${API_PATH}`);
});
