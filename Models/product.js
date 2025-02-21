import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    user: { type: Types.ObjectId, ref: "user" },
    orders: { type: Types.ObjectId, ref: "orders" },
  },
  {
    timestamps: true,
  }
);

const Product = model("products", productSchema);

export default Product;
