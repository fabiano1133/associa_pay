import { AddIntegrationKeyUseCase } from "../../application/usecases/AddIntegrationKeyUseCase";
import { MongooseUsersRepository } from "../../infra/database/mongodb/MongooseUsersRepository";
import { PinoLogger } from "../../infra/logging/pino/PinoLogger";
import { AddIntegrationKeyController } from "../../presentation/controllers/AddIntegrationKeyController";
import { IntegrationValidatorAdapter } from "../adapters/IntegrationValidatorAdapter";
import { PinoLoggerAdapter } from "../adapters/PinoLoggerAdapter";
import { UsersRepositoryAdapter } from "../adapters/UsersRepositoryAdapter";

export const makeAddIntegrationKey = (): AddIntegrationKeyController => {
  const mongooseUserRepository = new MongooseUsersRepository();
  const usersRepositoryAdapter = new UsersRepositoryAdapter(
    mongooseUserRepository
  );

  const integrationValidatorAdapter = new IntegrationValidatorAdapter();

  const addIntegrationKeyUseCase = new AddIntegrationKeyUseCase(
    usersRepositoryAdapter,
    integrationValidatorAdapter
  );
  const pino = new PinoLogger();
  const pinoLoggerAdapter = new PinoLoggerAdapter(pino);
  return new AddIntegrationKeyController(
    addIntegrationKeyUseCase,
    pinoLoggerAdapter
  );
};
