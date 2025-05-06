export interface IHttpRequest {
  body?: any;
  params?: any;
}

export interface IHttpResponse {
  body: {
    stack?: string;
    message?: string;
  };
  statusCode: number;
}
