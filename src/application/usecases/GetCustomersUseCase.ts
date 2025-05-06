import { ICustomerResponse } from "../../domain/interfaces/ICustomer";
import { ICustomer } from "../ports/ICustomerService";

export class GetCustomersUseCase {
  constructor(private readonly customerService: ICustomer) {}

  async execute(): Promise<ICustomerResponse[]> {
    return this.customerService.getAll();
  }
}
