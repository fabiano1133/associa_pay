import { InternalServerError } from "../errors/InternalServerErros";
import { IHttpResponse } from "../protocols/IHttp";

export const created = (body: any): IHttpResponse => {
  return {
    statusCode: 201,
    body,
  };
};

export const ok = (body: any): IHttpResponse => {
  return {
    statusCode: 200,
    body,
  };
};

export const badRequest = (error: Error): IHttpResponse => {
  return {
    statusCode: 400,
    body: error,
  };
};

export const notFound = (error: Error): IHttpResponse => {
  return {
    statusCode: 404,
    body: error,
  };
};

export const businessError = (error: Error): IHttpResponse => {
  return {
    statusCode: 422,
    body: error,
  };
};

export const internalServerError = (error: Error): IHttpResponse => {
  return {
    statusCode: 500,
    body: new InternalServerError(error.message),
  };
};
