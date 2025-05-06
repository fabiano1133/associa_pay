import { Express, Router } from "express";
import path, { dirname } from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { PinoLogger } from "../../infra/logging/pino/PinoLogger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const logger = new PinoLogger();

export const setupRouter = async (app: Express) => {
  const router = Router();
  app.use("/v1/api", router);
  const routesPath = path.join(__dirname, "../", "routes");
  const routesFile = fs.readdirSync(routesPath);
  routesFile.flatMap(async (file) => {
    (await import(`../routes/${file}`)).default(router);
    logger.info(`Router file Loaded: [${file}]`);
  });
};
