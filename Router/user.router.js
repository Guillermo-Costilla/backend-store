import express from 'express';
import userController from '../controllers/user.controller.js';
import validator from '../middlewares/validator.js';
import { createUserSchema } from '../schema/user.schema.js';
import passport from '../middlewares/passport.js';

const { getUsers, createUser, updateUser, deleteUser, getUserById , updateUserProfile} = userController;

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', validator(createUserSchema), createUser);

router.put('/profile', passport.authenticate('jwt', { session: false }), updateUserProfile);

router.put('/:id', passport.authenticate('jwt', { session: false }), updateUser);

router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteUser);

export default router;


