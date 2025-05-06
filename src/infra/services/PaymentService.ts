import {
  IPaymentRequest,
  IPaymentResponse,
} from "../../domain/interfaces/IPayment";
import { asaasHelper } from "./AsaasHelper";

export class PaymentService {
  async createPayment(data: IPaymentRequest): Promise<IPaymentResponse> {
    const user = await asaasHelper.createPayment(data);
    return user;
  }
}
