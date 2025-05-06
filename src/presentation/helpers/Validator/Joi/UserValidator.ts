import { IValidator } from "../../../../application/ports/IValidate";
import { BadRequestError } from "../../../errors/BadRequestError";
import { userSchema } from "./Schemas";

export class UserValidator implements IValidator {
  async fieldValidation(fields: any): Promise<any> {
    const { error, value } = userSchema.validate(fields);

    if (error) {
      throw new BadRequestError(error.message);
    }
    return value;
  }
}
