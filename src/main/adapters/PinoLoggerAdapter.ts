import { ILogger } from "../../application/ports/ILoggerService";

export class PinoLoggerAdapter implements ILogger {
  constructor(private readonly logger: ILogger) {}
  info(meta: any, message?: string): void {
    this.logger.info(meta, message);
  }
  error(meta: any, message?: string): void {
    this.logger.error(meta, message);
  }
  debug(meta: any, message?: string): void {
    this.logger.debug(meta, message);
  }
}
