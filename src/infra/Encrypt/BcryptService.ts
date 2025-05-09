import { IHashedPassword } from "../../application/ports/IHashedPassword";
import bcrypt from "bcryptjs";

export class BcryptService implements IHashedPassword {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }
  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
