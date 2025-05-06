import { AddCustomerUseCase } from "../../application/usecases/AddCustomerUseCase";
import { created } from "../helpers/HttpHelper";
import { IController } from "../protocols/IController";
import { IHttpRequest, IHttpResponse } from "../protocols/IHttp";
import { AppError } from "../../domain/errors/AppError";

export class AddCustomerController implements IController {
  constructor(private readonly addCustomertUseCase: AddCustomerUseCase) {}
  async handler(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const {
        name,
        cpfCnpj,
        email,
        mobilePhone,
        address,
        addressNumber,
        complement,
        province,
        postalCode,
      } = httpRequest.body;
      const user = await this.addCustomertUseCase.execute({
        name,
        cpfCnpj,
        email,
        mobilePhone,
        address,
        addressNumber,
        complement,
        province,
        postalCode,
      });

      return created(user);
    } catch (error: any) {
      throw new AppError(JSON.stringify(error.response?.data), error.status); //TO DO REFACTOR
    }
  }
}
