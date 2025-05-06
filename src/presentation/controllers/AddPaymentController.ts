import { created } from "../helpers/HttpHelper";
import { IController } from "../protocols/IController";
import { IHttpRequest, IHttpResponse } from "../protocols/IHttp";
import { AppError } from "../../domain/errors/AppError";
import { AddPaymentUseCase } from "../../application/usecases/AddPaymentUseCase";

export class AddPaymentController implements IController {
  constructor(private readonly addPaymentUseCase: AddPaymentUseCase) {}
  async handler(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { customer, billingType, value, dueDate } = httpRequest.body;
      const payment = await this.addPaymentUseCase.execute({
        customer,
        billingType,
        value,
        dueDate,
      });

      return created(payment);
    } catch (error: any) {
      throw new AppError(JSON.stringify(error.response?.data), error.status); //TO DO REFACTOR
    }
  }
}
