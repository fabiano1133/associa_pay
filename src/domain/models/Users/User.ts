export class User {
  id?: string;
  name: string;
  cpfCnpj: string;
  email: string;
  mobilePhone: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  integrationKey?: string;
  constructor({
    id,
    name,
    cpfCnpj,
    email,
    mobilePhone,
    password,
    createdAt,
    updatedAt,
    integrationKey,
  }: User) {
    this.id = id;
    this.name = name;
    this.cpfCnpj = cpfCnpj;
    this.email = email;
    this.mobilePhone = mobilePhone;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.integrationKey = integrationKey;
  }
}
