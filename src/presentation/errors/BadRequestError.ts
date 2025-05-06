import { AppError } from "../../domain/errors/AppError";

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}
