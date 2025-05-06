import axios from "axios";
import https from "https";

const api = axios.create({
  baseURL: process.env.BASE_URL_PAYMENTS_SERVICE,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    access_token: `${process.env.ACCESS_TOKEN}`,
  },
});

export default api;
