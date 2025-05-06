import { AppError } from "../../domain/errors/AppError";

export class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}
