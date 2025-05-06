import { FindUserByIdUseCase } from "../../application/usecases/FindUserByIdUseCase";
import { MongooseUsersRepository } from "../../infra/database/mongodb/MongooseUsersRepository";
import { PinoLogger } from "../../infra/logging/pino/PinoLogger";
import { FindUserByIdController } from "../../presentation/controllers/FindUserByIdController";
import { PinoLoggerAdapter } from "../adapters/PinoLoggerAdapter";
import { UsersRepositoryAdapter } from "../adapters/UsersRepositoryAdapter";

export const makeFindUserById = (): FindUserByIdController => {
  const mongooseUsersRepository = new MongooseUsersRepository();
  const usersRepositoryAdapter = new UsersRepositoryAdapter(
    mongooseUsersRepository
  );
  const pino = new PinoLogger();
  const logger = new PinoLoggerAdapter(pino);
  const findUserByIdUseCase = new FindUserByIdUseCase(usersRepositoryAdapter);
  return new FindUserByIdController(findUserByIdUseCase, logger);
};
