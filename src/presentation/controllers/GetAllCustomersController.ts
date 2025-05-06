import { GetCustomersUseCase } from "../../application/usecases/GetCustomersUseCase";
import { AppError } from "../../domain/errors/AppError";
import { ok } from "../helpers/HttpHelper";
import { IController } from "../protocols/IController";
import { IHttpResponse } from "../protocols/IHttp";

export class GeAllCustomersController implements IController {
  constructor(private readonly getCustomersUseCase: GetCustomersUseCase) {}
  async handler(): Promise<IHttpResponse> {
    try {
      const user = await this.getCustomersUseCase.execute();
      return ok(user);
    } catch (error: any) {
      throw new AppError(JSON.stringify(error.response?.data), error.status); // TO DO CUSTOMER
    }
  }
}
