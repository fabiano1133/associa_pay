import { IValidator } from "../../application/ports/IValidate";
import { UserValidator } from "../../presentation/helpers/Validator/Joi/UserValidator";

export class UserValidatorAdapter implements IValidator {
  async fieldValidation(fields: any): Promise<any> {
    const joiValidator = new UserValidator();
    return joiValidator.fieldValidation(fields);
  }
}
