import { AppError } from "../../domain/errors/AppError";

export class BusinessError extends AppError {
  constructor(message: string) {
    super(message, 422);
  }
}
