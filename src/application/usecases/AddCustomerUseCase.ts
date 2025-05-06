import {
  ICustomerRequest,
  ICustomerResponse,
} from "../../domain/interfaces/ICustomer";
import { Customer } from "../../domain/models/Customers/Customer";
import { CustomerServiceAdapter } from "../../main/adapters/CustomerServiceAdapter";
import { ICustomer } from "../ports/ICustomerService";

export class AddCustomerUseCase {
  constructor(private readonly customerService: ICustomer) {}

  async execute(data: ICustomerRequest): Promise<ICustomerResponse> {
    const {
      name,
      cpfCnpj,
      address,
      addressNumber,
      complement,
      email,
      mobilePhone,
      postalCode,
      province,
    } = data;
    const { addCustomer } = new Customer();

    const customer = addCustomer(
      name,
      cpfCnpj,
      email,
      mobilePhone,
      address,
      addressNumber,
      complement,
      province,
      postalCode
    );
    const newCustomer = await this.customerService.add(customer);

    return newCustomer;
  }
}
