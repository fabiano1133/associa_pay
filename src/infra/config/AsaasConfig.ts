export default {
  integration: {
    baseURL: String(process.env.BASE_URL_PAYMENTS_SERVICE),
    access_token: String(process.env.ACCESS_TOKEN),
  },
};
