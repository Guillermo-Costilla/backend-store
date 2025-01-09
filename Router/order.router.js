import express from 'express';
import orderController from '../Controllers/order.controller.js';
import passport from '../middlewares/passport.js';

const { getOrdersByUser, createOrder } = orderController;

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), getOrdersByUser);
router.post('/', passport.authenticate('jwt', { session: false }), createOrder);

export default router;
