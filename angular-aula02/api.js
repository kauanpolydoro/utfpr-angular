import express from "express";
import cors from "cors";

import { turmasRouter } from "./api/turma.js";

const API_PORT = 3000;
const API_PATH = 'api'
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(`/${API_PATH}/turmas`, turmasRouter);

app.listen(API_PORT, () => {
  console.log(`Server running on port ${API_PORT}/${API_PATH}`);
});
