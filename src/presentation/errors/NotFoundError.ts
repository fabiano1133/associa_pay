import { AppError } from "../../domain/errors/AppError";

export class NotFoudError extends AppError {
  constructor(message: string) {
    super(message, 404);
  }
}
