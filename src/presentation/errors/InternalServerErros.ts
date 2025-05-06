import { AppError } from "../../domain/errors/AppError";

export class InternalServerError extends AppError {
  constructor(stackError: string) {
    super(stackError, 500);
    this.stack = stackError;
  }
}
