import { AddPaymentUseCase } from "../../application/usecases/AddPaymentUseCase";
import { PaymentService } from "../../infra/services/PaymentService";
import { AddPaymentController } from "../../presentation/controllers/AddPaymentController";
import { PaymentServiceAdapter } from "../adapters/PaymentServiceAdapter";

export const makeAddPayment = (): AddPaymentController => {
  const paymentService = new PaymentService();
  const paymentServiceAdapter = new PaymentServiceAdapter(paymentService);
  const addPaymentUseCase = new AddPaymentUseCase(paymentServiceAdapter);
  return new AddPaymentController(addPaymentUseCase);
};
