import { Router } from "express";
import { adapterRoute } from "../adapters/ExpressAdapter";
import {
  makeAddCustomer,
  makeGetAllCustomers,
  makeGetCustomerById,
} from "../factories";

export default (router: Router): void => {
  router.post("/account", adapterRoute(makeAddCustomer()));
  router.get("/account/:id", adapterRoute(makeGetCustomerById()));
  router.get("/accounts", adapterRoute(makeGetAllCustomers()));
};
