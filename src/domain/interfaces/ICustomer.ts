export interface ICustomerRequest {
  customId?: string;
  name: string;
  cpfCnpj: string;
  email: string;
  mobilePhone: string;
  address: string;
  addressNumber: string;
  complement: string;
  province: string;
  postalCode: string;
}

export interface ICustomerResponse {
  id?: string;
  name: string;
  cpfCnpj: string;
  email: string;
  mobilePhone: string;
  address: string;
  addressNumber: string;
  complement: string;
  province: string;
  postalCode: string;
}
