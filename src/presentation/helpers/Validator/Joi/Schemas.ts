import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().required(),
  cpfCnpj: Joi.string().required(),
  email: Joi.string().email().required(),
  mobilePhone: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export const integrationSchema = Joi.object({
  id: Joi.string().required(),
  key: Joi.string().required(),
});
