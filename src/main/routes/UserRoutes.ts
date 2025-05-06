import { Router } from "express";
import { adapterRoute } from "../adapters/ExpressAdapter";
import { makeCreateUser } from "../factories/CreateUserFactory";
import { makeFindUserById } from "../factories/FindUserByIdFactory";
import { makeAddIntegrationKey } from "../factories/AddIntegrationKeyFactory";

export default (router: Router): void => {
  router.post("/users", adapterRoute(makeCreateUser()));
  router.get("/users/:id", adapterRoute(makeFindUserById()));
  router.patch("/users/:id", adapterRoute(makeAddIntegrationKey()));
};
