import { Model, model, Schema } from "mongoose";

interface IUser {
  username: {
    type: String;
  };
  phoneNumber: {
    type: String;
  };
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

export const UserModel = model<IUser>("User", UserSchema);
