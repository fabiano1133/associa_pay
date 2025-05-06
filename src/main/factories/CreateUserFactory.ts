import { CreateUserUseCase } from "../../application/usecases/CreateUserUseCase";
import { MongooseUsersRepository } from "../../infra/database/mongodb/MongooseUsersRepository";
import { BcryptService } from "../../infra/Encrypt/BcryptService";
import { PinoLogger } from "../../infra/logging/pino/PinoLogger";
import { CreateUserController } from "../../presentation/controllers/CreateUserController";
import { BcryptAdapter } from "../adapters/BcryptAdapter";
import { PinoLoggerAdapter } from "../adapters/PinoLoggerAdapter";
import { UsersRepositoryAdapter } from "../adapters/UsersRepositoryAdapter";
import { UserValidatorAdapter } from "../adapters/UserValidatorAdapter";

export const makeCreateUser = (): CreateUserController => {
  const mongooseUsersRepository = new MongooseUsersRepository();
  const usersRepositoryAdapter = new UsersRepositoryAdapter(
    mongooseUsersRepository
  );
  const userValidatorAdapter = new UserValidatorAdapter();
  const bcrypt = new BcryptService();
  const hashedService = new BcryptAdapter(bcrypt);
  const createUserUseCase = new CreateUserUseCase(
    usersRepositoryAdapter,
    userValidatorAdapter,
    hashedService
  );
  const pino = new PinoLogger();
  const pinoLoggerAdapter = new PinoLoggerAdapter(pino);
  return new CreateUserController(createUserUseCase, pinoLoggerAdapter);
};
