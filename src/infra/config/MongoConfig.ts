export default {
  uri:
    process.env.MONGO_URI ||
    "mongodb://admin:admin@localhost:27017?authSource=admin",
  database: process.env.DB_NAME || "associa_pay_db",
};
