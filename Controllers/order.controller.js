import Order from "../models/orders.js";

const orderController = {
  getOrdersByUser: async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user._id }).populate(
        "products"
      );
      return res.status(200).json({
        success: true,
        orders: orders,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when obtaining orders",
        error: error.message,
      });
    }
  },

  getOrder: async (req, res) => {
    try {
      const order = await Order.find();
      return res.status(200).json({
        success: true,
        order: order,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when obtaining orders",
        error: error.message,
      });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);

      if (order) {
        return res.status(200).json({
          success: true,
          order: order,
        });
      }
      return res.status(404).json({
        success: false,
        message: "The order could not be found",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when obtaining order",
        error: error.message,
      });
    }
  },

  createOrder: async (req, res) => {
    try {
      const newOrder = await Order.create({
        user: req.user._id,
        products: req.body.products,
        total: req.body.total,
      });

      return res.status(201).json({
        success: true,
        message: "Order created",
        order: newOrder,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when creating order",
        error: error.message,
      });
    }
  },

  updateOrder: async (req, res) => {
    try {
      await Order.updateOne({ _id: req.params.id }, req.body);

      return res.status(200).json({
        success: true,
        message: "Updating order",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when updating order",
        error: error.message,
      });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      await Order.deleteOne({ _id: req.params.id });

      return res.status(200).json({
        success: true,
        message: "The order was successfully eliminated",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Error when deleting order",
        error: error.message,
      });
    }
  },
};

export default orderController;
