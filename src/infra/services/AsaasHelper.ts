import api from "./api";
import { ICustomerRequest } from "../../domain/interfaces/ICustomer";
import { IPaymentRequest } from "../../domain/interfaces/IPayment";

const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
};
export const asaasHelper = {
  async createCustomer(data: ICustomerRequest) {
    try {
      const { data: response } = await api.post(`/customers`, data, options);

      return response;
    } catch (error: any) {
      throw error;
    }
  },

  async getCustomerById(id: string) {
    try {
      const { data: response } = await api.get(`/customers/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  async getAllCustomers() {
    try {
      const { data: response } = await api.get(`/customers`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },

  async createPayment(data: IPaymentRequest) {
    console.log(data);
    try {
      const { data: response } = await api.post(`/payments`, data, options);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
};
