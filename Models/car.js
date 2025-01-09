import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    products: [{
        product: { type: Schema.Types.ObjectId, ref: 'products', required: true },
        quantity: { type: Number, required: true }
    }],
}, {
    timestamps: true
});

const Cart = model('carts', cartSchema);

export default Cart;