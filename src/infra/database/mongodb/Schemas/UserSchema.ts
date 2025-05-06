import mongoose from "mongoose";

const { Schema } = mongoose;

export const userSchema = new Schema({
  name: { type: String, required: true },
  cpfCnpj: { type: String, required: true },
  email: { type: String, required: true },
  mobilePhone: { type: String, required: true },
  password: { type: String, required: true },
  integrationKey: { type: String, required: false, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
