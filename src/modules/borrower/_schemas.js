const Joi = require("joi");

exports.postBorrowersSchema = {
  body: Joi.object({
    full_name: Joi.string().min(4).max(100).required(),
    address: Joi.string().min(4).max(100).required(),
    phone: Joi.string().min(4).max(100).required(),
  }),
};

exports.showOneBorrowersSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};

exports.editBorrowersSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
  body: Joi.object({
    full_name: Joi.string().min(4).max(100).required(),
    address: Joi.string().min(4).max(100).required(),
    phone: Joi.string().min(4).max(100).required(),
  }),
};

exports.deleteOneBorrowersSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};
