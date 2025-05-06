import { AddCustomerUseCase } from "../../application/usecases/AddCustomerUseCase";
import { CustomerService } from "../../infra/services/CustomerService";
import { AddCustomerController } from "../../presentation/controllers/AddCustomerController";
import { CustomerServiceAdapter } from "../adapters/CustomerServiceAdapter";

export const makeAddCustomer = (): AddCustomerController => {
  const customerService = new CustomerService();
  const customerServiceAdapter = new CustomerServiceAdapter(customerService);
  const addCustomerUseCase = new AddCustomerUseCase(customerServiceAdapter);
  return new AddCustomerController(addCustomerUseCase);
};
