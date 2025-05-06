import { ILogger } from "../../../application/ports/ILoggerService";
import pino from "pino";

export class PinoLogger implements ILogger {
  private logger = pino();
  info(meta: any, message?: string): void {
    this.logger.info(meta, message);
  }
  error(meta: any, message?: string): void {
    this.logger.error(meta, message);
  }
  debug(meta: any, message?: string): void {
    this.logger.debug(meta, message);
  }

  trace(meta: any, message?: string): void {
    this.logger.trace(meta, message);
  }
}
