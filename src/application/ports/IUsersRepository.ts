import { User } from "../../domain/models/Users/User";

export interface IUsersRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  addIntegrationKey(id: string, key: string): Promise<void>;
}
