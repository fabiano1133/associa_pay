import { GetCustomerByIdUseCase } from "../../application/usecases/GetCustomerByIdUseCase";
import { CustomerService } from "../../infra/services/CustomerService";
import { GetCustomerByIdController } from "../../presentation/controllers/GetCustomerByIdController";
import { CustomerServiceAdapter } from "../adapters/CustomerServiceAdapter";

export const makeGetCustomerById = (): GetCustomerByIdController => {
  const customerService = new CustomerService();
  const customerServiceAdapter = new CustomerServiceAdapter(customerService);
  const getCustomerByIdUseCase = new GetCustomerByIdUseCase(
    customerServiceAdapter
  );
  return new GetCustomerByIdController(getCustomerByIdUseCase);
};
