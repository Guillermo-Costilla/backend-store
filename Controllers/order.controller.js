import Order from "../models/Order.js";

const orderController = {
    getOrdersByUser: async (req, res) => {
        try {
            const orders = await Order.find({ user: req.user._id }).populate('products');
            return res.status(200).json({
                success: true,
                orders: orders
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Error when obtaining orders",
                error: error.message
            });
        }
    },

    createOrder: async (req, res) => {
        try {
            const newOrder = await Order.create({
                user: req.user._id,
                products: req.body.products,
                total: req.body.total
            });

            return res.status(201).json({
                success: true,
                message: "Order created",
                order: newOrder
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Error when creating order",
                error: error.message
            });
        }
    }
};

export default orderController;
