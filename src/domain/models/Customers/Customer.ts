export class Customer {
  constructor() {}
  addCustomer(
    name: string,
    cpfCnpj: string,
    email: string,
    mobilePhone: string,
    address: string,
    addressNumber: string,
    complement: string,
    province: string,
    postalCode: string
  ) {
    const customer = {
      name,
      cpfCnpj,
      email,
      mobilePhone,
      address,
      addressNumber,
      complement,
      province,
      postalCode,
    };
    return customer;
  }
}
