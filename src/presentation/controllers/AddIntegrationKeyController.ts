import { ILogger } from "../../application/ports/ILoggerService";
import { AddIntegrationKeyUseCase } from "../../application/usecases/AddIntegrationKeyUseCase";
import { BadRequestError } from "../errors/BadRequestError";
import { badRequest, internalServerError, ok } from "../helpers/HttpHelper";
import { IController } from "../protocols/IController";
import { IHttpResponse } from "../protocols/IHttp";

export class AddIntegrationKeyController implements IController {
  constructor(
    private readonly addIntegrationKeyUseCase: AddIntegrationKeyUseCase,
    private logger: ILogger
  ) {}
  async handler(httpRequest: any): Promise<IHttpResponse> {
    const callName = `${this.constructor.name}.${this.handler.name}()`;
    try {
      const { id } = httpRequest.params;

      const { key } = httpRequest.body;

      const user = await this.addIntegrationKeyUseCase.execute(id, key);

      this.logger.info(
        {
          data: user,
        },
        callName
      );

      return ok(user);
    } catch (error: any) {
      this.logger.error(
        {
          error,
        },
        error.message
      );
      if (error instanceof BadRequestError) {
        return badRequest(error);
      }
      return internalServerError(error);
    }
  }
}
