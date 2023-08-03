const Joi = require("joi");

exports.postAuthorSchema = {
  body: Joi.object({
    name: Joi.string().min(4).max(100).required(),
  }),
};

exports.showOneAuthorSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};

exports.editAuthorSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
  body: Joi.object({
    name: Joi.string().min(4).max(100).required(),
  }),
};

exports.deleteOneAuthorSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};
