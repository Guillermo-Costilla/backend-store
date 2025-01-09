import User from "../models/User.js";

const controller = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json({
        success: true,
        users: users,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when obtaining users",
        error: error.message,
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (user) {
        return res.status(200).json({
          success: true,
          user: user,
        });
      }
      return res.status(404).json({
        success: false,
        message: "The user could not be found",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when obtaining user",
        error: error.message,
      });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);

      return res.status(201).json({
        success: true,
        message: "User created",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when creating user",
        error: error.message,
      });
    }
  },

  updateUser: async (req, res) => {
    try {
      await User.updateOne({ _id: req.params.id }, req.body);

      return res.status(200).json({
        success: true,
        message: "Updating user",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when updating user",
        error: error.message,
      });
    }
  },

  updateUserProfile: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
        new: true,
      });
      return res.status(200).json({
        success: true,
        message: "User profile updated",
        user: updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error when updating user profile",
        error: error.message,
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.deleteOne({ _id: req.params.id });

      return res.status(200).json({
        success: true,
        message: "The User was successfully eliminated",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Error when deleting User",
        error: error.message,
      });
    }
  },
};

export default controller;
