const Joi = require("joi");

exports.postBookSchema = {
  body: Joi.object({
    title: Joi.string().min(4).max(100).required(),
    publisher: Joi.string().min(24).max(24).required(),
    author: Joi.string().min(24).max(24).required(),
    copies: Joi.number().required(),
  }),
};

exports.showOneBookSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};

exports.editBookSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
  body: Joi.object({
    title: Joi.string().min(4).max(100).required(),
    publisher: Joi.string().min(24).max(24).required(),
    author: Joi.string().min(24).max(24).required(),
    copies: Joi.number().required(),
  }),
};

exports.deleteOneBookSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};
