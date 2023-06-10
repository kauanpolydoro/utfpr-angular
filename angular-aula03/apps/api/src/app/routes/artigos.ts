import { NextFunction } from "express";
import { Request, Response, Router } from "express";
import { getCollection } from "../util/mongodb-util";
import { IArtigo } from "@cefwm-angular/common"

const artigosRouter = Router();

artigosRouter.get("/", async (request: Request, response: Response, _next: NextFunction) => {
  const db = request.app.locals.db;
  const artigos = await getCollection<IArtigo>(db, "artigos").find().toArray();
  response.status(200).json(artigos);
})

export { artigosRouter };
