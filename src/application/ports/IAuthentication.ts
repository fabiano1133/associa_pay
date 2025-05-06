export interface IAuthentication {
  sign(payload: {}, secret: string, expiresIn: string): Promise<string>;
  verify(token: string, secret: string): Promise<any>;
}
