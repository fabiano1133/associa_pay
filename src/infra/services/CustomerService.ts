import {
  ICustomerRequest,
  ICustomerResponse,
} from "../../domain/interfaces/ICustomer";
import { asaasHelper } from "./AsaasHelper";

export class CustomerService {
  async createCustomer(data: ICustomerRequest): Promise<ICustomerResponse> {
    const user = await asaasHelper.createCustomer(data);
    return user;
  }
  async getCustomerById(id: string): Promise<ICustomerResponse> {
    const user = await asaasHelper.getCustomerById(id);
    return user;
  }
  async getAllCustomers(): Promise<ICustomerResponse[]> {
    const user = await asaasHelper.getAllCustomers();
    return user;
  }
}
