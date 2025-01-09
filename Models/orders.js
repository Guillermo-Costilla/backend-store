import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'products', required: true }],
    total: { type: Number, required: true },
    status: { type: String, default: 'pending' },
}, {
    timestamps: true
});

const Order = model('orders', orderSchema);

export default Order;
