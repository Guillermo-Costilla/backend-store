import Joi from 'joi';

// Esquema de validación para un producto
export const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().positive(),
    stock: Joi.number().required().min(0),
    image: Joi.string().required().uri(),
    category: Joi.string().required()
});