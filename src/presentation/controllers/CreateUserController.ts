import { ILogger } from "../../application/ports/ILoggerService";
import { CreateUserUseCase } from "../../application/usecases/CreateUserUseCase";
import { BadRequestError } from "../errors/BadRequestError";
import { BusinessError } from "../errors/BusinessError";
import {
  badRequest,
  businessError,
  created,
  internalServerError,
} from "../helpers/HttpHelper";
import { IController } from "../protocols/IController";
import { IHttpResponse } from "../protocols/IHttp";

export class CreateUserController implements IController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly logger: ILogger
  ) {}
  async handler(httpRequest: any): Promise<IHttpResponse> {
    const callName = `${this.constructor.name}.${this.handler.name}()`;

    try {
      const { name, cpfCnpj, email, mobilePhone, password } = httpRequest.body;

      const user = await this.createUserUseCase.execute({
        name,
        cpfCnpj,
        email,
        mobilePhone,
        password,
      });

      this.logger.info({ body: { name, email } }, callName);

      return created(user);
    } catch (error: any) {
      this.logger.error({ error }, error.message);
      if (error instanceof BadRequestError) {
        return badRequest(error);
      }
      if (error instanceof BusinessError) {
        return businessError(error);
      }
      return internalServerError(error);
    }
  }
}
