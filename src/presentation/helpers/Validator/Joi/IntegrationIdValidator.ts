import { IValidator } from "../../../../application/ports/IValidate";
import { BadRequestError } from "../../../errors/BadRequestError";
import { integrationSchema } from "./Schemas";

export class IntegrationIdValidator implements IValidator {
  async fieldValidation(fields: any): Promise<any> {
    const { error, value } = integrationSchema.validate(fields);

    if (error) {
      throw new BadRequestError(error.message);
    }
    return value;
  }
}
