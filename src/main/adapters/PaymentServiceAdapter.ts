import { IPaymentService } from "../../application/ports/IPaymentService";
import {
  IPaymentRequest,
  IPaymentResponse,
} from "../../domain/interfaces/IPayment";
import { PaymentService } from "../../infra/services/PaymentService";

export class PaymentServiceAdapter implements IPaymentService {
  constructor(private readonly paymentService: PaymentService) {}

  async add(data: IPaymentRequest): Promise<IPaymentResponse> {
    return await this.paymentService.createPayment(data);
  }
}
