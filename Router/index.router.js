import express from "express";
import orderRouter from "./order.router.js";
import userRouter from "./user.router.js";

const router = express.Router();

router.use("/orders", orderRouter);

router.use("/users", userRouter);

export default router;
