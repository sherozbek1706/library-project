const Joi = require("joi");

exports.postLoansSchema = {
  body: Joi.object({
    book: Joi.string().min(24).max(24).required(),
    borrower: Joi.string().min(24).max(24).required(),
    day: Joi.number().required(),
  }),
};

exports.showOneLoansSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};
