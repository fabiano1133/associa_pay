import { BillingType } from "../../enum/BillingTypeEnum";

export class Payment {
  constructor() {}

  addPayment(
    customer: string,
    billingType: BillingType,
    value: number,
    dueDate: Date
  ) {
    const payment = {
      customer,
      billingType,
      value,
      dueDate,
    };
    return payment;
  }
}
