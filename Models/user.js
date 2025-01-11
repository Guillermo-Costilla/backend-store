import { Schema, model, Types } from "mongoose";
import bcrypt from "bcryptjs";

const collection = "users";

const schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    google: { type: Boolean, default: false },
    country: { type: String },
    online: { type: Boolean, default: false },
    verified: { type: Boolean, default: true },
    verified_code: { type: String },
    products: { type: Types.ObjectId, ref: "products" },
    orders: { type: Types.ObjectId, ref: "orders" },
  },
  {
    timestamps: true,
  }
);

// Encriptar la contraseña antes de guardar
schema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User = model(collection, schema);

export default User;
