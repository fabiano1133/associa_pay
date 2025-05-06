import { ICustomerResponse } from "../../domain/interfaces/ICustomer";
import { ICustomer } from "../ports/ICustomerService";

export class GetCustomerByIdUseCase {
  constructor(private readonly customerService: ICustomer) {}

  async execute(id: string): Promise<ICustomerResponse> {
    return this.customerService.getById(id);
  }
}
