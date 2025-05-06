export interface IValidator {
  fieldValidation(fields: any): Promise<any>;
}
