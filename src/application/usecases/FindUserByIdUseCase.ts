import { User } from "../../domain/models/Users/User";
import { NotFoudError } from "../../presentation/errors/NotFoundError";
import { IUsersRepository } from "../ports/IUsersRepository";

export class FindUserByIdUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User | null> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoudError("Usuário não encontrado!");
    }
    return user;
  }
}
