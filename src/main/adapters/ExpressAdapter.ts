import { Request, Response } from "express";
import { IController } from "../../presentation/protocols/IController";

export const adapterRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: any = {
      body: req.body,
      params: req.params,
    };
    const httpResponse = await controller.handler(httpRequest);

    if (httpResponse.statusCode === 201 || httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body?.message,
        statusCode: httpResponse.statusCode,
      });
    }
  };
};
