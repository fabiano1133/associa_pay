import { randomUUID } from "crypto";
import { ILogger } from "../../application/ports/ILoggerService";
import { FindUserByIdUseCase } from "../../application/usecases/FindUserByIdUseCase";
import { notFound, ok } from "../helpers/HttpHelper";
import { IController } from "../protocols/IController";
import { IHttpResponse } from "../protocols/IHttp";

export class FindUserByIdController implements IController {
  constructor(
    private readonly findUserByIdUseCase: FindUserByIdUseCase,
    private logger: ILogger
  ) {}
  async handler(httpRequest: any): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params;

      const callName = `${this.constructor.name}.${this.handler.name}() - called with user id: ${id}`;

      const user = await this.findUserByIdUseCase.execute(id);

      this.logger.info(
        {
          data: user,
        },
        callName
      );

      return ok(user);
    } catch (error: any) {
      console.warn("Error APP", error);
      this.logger.error(error, error.stack);
      return notFound(error);
    }
  }
}
