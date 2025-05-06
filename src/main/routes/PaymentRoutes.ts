import { Router } from "express";
import { adapterRoute } from "../adapters/ExpressAdapter";
import { makeAddPayment } from "../factories/AddPaymentFactory";

export default (router: Router): void => {
  router.post("/payment", adapterRoute(makeAddPayment()));
};
