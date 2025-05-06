import { GetCustomerByIdUseCase } from "../../application/usecases/GetCustomerByIdUseCase";
import { GetCustomersUseCase } from "../../application/usecases/GetCustomersUseCase";
import { CustomerService } from "../../infra/services/CustomerService";
import { GetCustomerByIdController } from "../../presentation/controllers/GetCustomerByIdController";
import { GeAllCustomersController } from "../../presentation/controllers/GetAllCustomersController";
import { CustomerServiceAdapter } from "../adapters/CustomerServiceAdapter";

export const makeGetAllCustomers = (): GeAllCustomersController => {
  const customerService = new CustomerService();
  const customerServiceAdapter = new CustomerServiceAdapter(customerService);
  const getAllCustomersUseCase = new GetCustomersUseCase(
    customerServiceAdapter
  );
  return new GeAllCustomersController(getAllCustomersUseCase);
};
