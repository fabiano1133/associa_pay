import { IHttpResponse } from "./IHttp";

export interface IController {
  handler(httpRequest: any): Promise<IHttpResponse>;
}
