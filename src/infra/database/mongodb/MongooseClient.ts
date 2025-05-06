import mongoose from "mongoose";
import mongoConfig from "../../config/MongoConfig";
import { PinoLogger } from "../../logging/pino/PinoLogger";
const logger = new PinoLogger();

export const mongoHelper = {
  async connect() {
    try {
      mongoose.connection.on("connected", () =>
        logger.info("Database is Connected!")
      );
      await mongoose.connect(mongoConfig.uri, {
        dbName: mongoConfig.database,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  },
};
