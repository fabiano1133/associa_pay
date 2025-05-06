import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { setupMiddlewares } from "./main/middlewares/SetupMiddleware";
import { setupRouter } from "./main/config/routes";
import { mongoHelper } from "./infra/database/mongodb/MongooseClient";

export const app = express();
async function start() {
  await mongoHelper.connect();
  setupMiddlewares(app);
  setupRouter(app);
}

start();
