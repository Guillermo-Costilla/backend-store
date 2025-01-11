import Joi from "joi";

const orderValidationSchema = Joi.object({
  user: Joi.string().required(),
  products: Joi.array().items(Joi.string().required()).required(),
  total: Joi.number().required(),
  status: Joi.string()
    .valid("pending", "completed", "shipped", "canceled")
    .default("pending"),
  product: Joi.string().required(),
});
