const { Router, response } = require("express");
const fs = require("fs");
const path = require("path");

const arquivoJson = path.join(__dirname, "./categorias.json");

const filmeRouter = Router();

filmeRouter.get("/", (req, res) => {

  fs.readFile(arquivoJson, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Erro ao ler o arquivo:", err);
    }
    try {
      const jsonCategorias = JSON.parse(jsonString);

      const resumoCategorias = jsonCategorias.categorias.map((categoria) => ({
        id: categoria.id,
        nome: categoria.nome,
      }));

      return res.json(resumoCategorias);
    } catch (err) {
      console.log("Erro ao fazer o parse do JSON string:", err);
    }
  });

});

filmeRouter.get("/:id", (req, res) => {

  const id = req.params.id;

  fs.readFile(arquivoJson, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Erro ao ler o arquivo:", err);
    }
    try {
      const jsonCategorias = JSON.parse(jsonString);

      const categoria = jsonCategorias.categorias.find((categoria) => categoria.id == id);

      return res.json(categoria);
    } catch (err) {
      console.log("Erro ao fazer o parse do JSON string:", err);
    }
  });

});

module.exports = filmeRouter;
