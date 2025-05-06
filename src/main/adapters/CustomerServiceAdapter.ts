import { ICustomer } from "../../application/ports/ICustomerService";
import {
  ICustomerRequest,
  ICustomerResponse,
} from "../../domain/interfaces/ICustomer";
import { CustomerService } from "../../infra/services/CustomerService";

export class CustomerServiceAdapter implements ICustomer {
  constructor(private readonly customerService: CustomerService) {}

  async add(data: ICustomerRequest): Promise<ICustomerResponse> {
    return await this.customerService.createCustomer(data);
  }

  async getById(id: string): Promise<ICustomerResponse> {
    return await this.customerService.getCustomerById(id);
  }

  async getAll(): Promise<ICustomerResponse[]> {
    return await this.customerService.getAllCustomers();
  }
}
