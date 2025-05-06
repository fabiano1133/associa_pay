import { BillingType } from "../enum/BillingTypeEnum";

export interface IPaymentRequest {
  customer: string;
  billingType: BillingType;
  value: number;
  dueDate: Date;
}

export interface IPaymentResponse {
  customer: string;
  billingType: BillingType;
  value: number;
  dueDate: Date;
}
