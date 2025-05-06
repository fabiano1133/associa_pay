import {
  IPaymentRequest,
  IPaymentResponse,
} from "../../domain/interfaces/IPayment";

export interface IPaymentService {
  add(data: IPaymentRequest): Promise<IPaymentResponse>;
}
