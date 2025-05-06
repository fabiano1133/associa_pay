import { GetCustomerByIdUseCase } from "../../application/usecases/GetCustomerByIdUseCase";
import { AppError } from "../../domain/errors/AppError";
import { ok } from "../helpers/HttpHelper";
import { IController } from "../protocols/IController";
import { IHttpResponse } from "../protocols/IHttp";

export class GetCustomerByIdController implements IController {
  constructor(
    private readonly getCustomerByIdUseCase: GetCustomerByIdUseCase
  ) {}
  async handler(httpRequest: any): Promise<IHttpResponse> {
    try {
      const { id } = httpRequest.params;

      const user = await this.getCustomerByIdUseCase.execute(id);

      return ok(user);
    } catch (error: any) {
      throw new AppError(JSON.stringify(error.response?.data), error.status); // TO DO REFACTOR
    }
  }
}
