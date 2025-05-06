import { IValidator } from "../../application/ports/IValidate";
import { IntegrationIdValidator } from "../../presentation/helpers/Validator/Joi/IntegrationIdValidator";

export class IntegrationValidatorAdapter implements IValidator {
  async fieldValidation(fields: any): Promise<any> {
    const joiValidator = new IntegrationIdValidator();
    return joiValidator.fieldValidation(fields);
  }
}
