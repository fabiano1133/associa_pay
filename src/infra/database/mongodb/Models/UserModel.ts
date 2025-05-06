import mongoose, { HydratedDocument, Model } from "mongoose";
import { userSchema } from "../Schemas/UserSchema";
import { User } from "../../../../domain/interfaces/IUser";

export type UserDocument = HydratedDocument<User>;

export const userModel: Model<UserDocument> = mongoose.model<UserDocument>(
  "Users",
  userSchema
);
