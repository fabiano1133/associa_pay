import {
  IPaymentRequest,
  IPaymentResponse,
} from "../../domain/interfaces/IPayment";
import { Payment } from "../../domain/models/Payments/Payment";
import { IPaymentService } from "../ports/IPaymentService";

export class AddPaymentUseCase {
  constructor(private readonly paymentService: IPaymentService) {}

  async execute(data: IPaymentRequest): Promise<IPaymentResponse> {
    const { customer, billingType, dueDate, value } = data;
    const { addPayment } = new Payment();

    const payment = addPayment(customer, billingType, value, dueDate);
    const newPayment = await this.paymentService.add(payment);

    return newPayment;
  }
}
