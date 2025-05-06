import { IUsersRepository } from "../../application/ports/IUsersRepository";
import { User } from "../../domain/models/Users/User";

export class UsersRepositoryAdapter implements IUsersRepository {
  constructor(private readonly userRepository: IUsersRepository) {}
  async save(user: User): Promise<void> {
    await this.userRepository.save(user);
  }
  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findById(id);
    return user;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }
  async addIntegrationKey(id: string, key: string): Promise<void> {
    await this.userRepository.addIntegrationKey(id, key);
  }
}
