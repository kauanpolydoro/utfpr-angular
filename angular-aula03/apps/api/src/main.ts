/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { MongoClient } from "mongodb";
import { artigosRouter } from './app/routes/artigos';

MongoClient.connect("mongodb://localhost:27017/angular-mongo")
  .then((client: MongoClient) => {
    app.locals.db = client.db("app-artigos")
    console.log("Connected to MongoDB at 27017")
  }).catch((error: Error) => {
    console.log("Failed to connect to MongoDB")
    console.log(error)
  });;

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use("/api/artigos", artigosRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
