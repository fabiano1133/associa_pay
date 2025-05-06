import { IUsersRepository } from "../../../application/ports/IUsersRepository";
import { User } from "../../../domain/models/Users/User";
import { userModel } from "./Models/UserModel";

export class MongooseUsersRepository implements IUsersRepository {
  async save(user: Omit<User, "id">): Promise<void> {
    await userModel.create(user);
  }
  async findById(id: string): Promise<User | null> {
    const user = await userModel.findById(id);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await userModel.findOne({ email });
    return user;
  }
  async addIntegrationKey(id: string, key: string): Promise<void> {
    const user = await this.findById(id);
    await userModel.updateOne({ _id: user?.id }, { integrationKey: key });
  }
}
