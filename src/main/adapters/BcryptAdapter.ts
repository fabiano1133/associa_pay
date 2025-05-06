import { IHashedPassword } from "../../application/ports/IHashedPassword";

export class BcryptAdapter implements IHashedPassword {
  constructor(private readonly hashedPassword: IHashedPassword) {}
  async hash(password: string): Promise<string> {
    return await this.hashedPassword.hash(password);
  }
  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await this.hashedPassword.compare(password, hashedPassword);
  }
}
