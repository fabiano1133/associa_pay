import { Express } from "express";
import { bodyParser } from "./BodyParser";
import { cors } from "./Cors";

export const setupMiddlewares = (app: Express) => {
  app.use(bodyParser);
  app.use(cors);
};
