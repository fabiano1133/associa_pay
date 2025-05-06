import {
  ICustomerRequest,
  ICustomerResponse,
} from "../../domain/interfaces/ICustomer";

export interface ICustomer {
  add(data: ICustomerRequest): Promise<ICustomerResponse>;
  getById(id: string): Promise<ICustomerRequest>;
  getAll(): Promise<ICustomerResponse[]>;
}
