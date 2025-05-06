import { User } from "../../domain/models/Users/User";
import { BusinessError } from "../../presentation/errors/BusinessError";
import { IHashedPassword } from "../ports/IHashedPassword";
import { IUsersRepository } from "../ports/IUsersRepository";
import { IValidator } from "../ports/IValidate";

export class CreateUserUseCase {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly userValidator: IValidator,
    private readonly hashedPassword: IHashedPassword
  ) {}

  async execute(user: User): Promise<void> {
    const requiredFields = await this.userValidator.fieldValidation(user);

    const userAllreadyExists = await this.usersRepository.findByEmail(
      requiredFields.email
    );

    if (userAllreadyExists) {
      throw new BusinessError("O E-mail informado já está em uso!");
    }

    const hashedPassword = await this.hashedPassword.hash(
      requiredFields.password
    );

    await this.usersRepository.save({
      ...requiredFields,
      password: hashedPassword,
    });
  }
}
