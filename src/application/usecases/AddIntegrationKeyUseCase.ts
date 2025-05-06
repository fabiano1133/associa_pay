import { IUsersRepository } from "../ports/IUsersRepository";
import { IValidator } from "../ports/IValidate";

export class AddIntegrationKeyUseCase {
  constructor(
    private readonly usersRepositoryAdapter: IUsersRepository,
    private readonly integrationValidator: IValidator
  ) {}

  async execute(id: string, key: string): Promise<void> {
    await this.integrationValidator.fieldValidation({
      id,
      key,
    });

    await this.usersRepositoryAdapter.addIntegrationKey(id, key);
  }
}
