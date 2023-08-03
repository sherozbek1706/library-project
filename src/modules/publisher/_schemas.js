const Joi = require("joi");

exports.postPublisherSchema = {
  body: Joi.object({
    full_name: Joi.string().min(4).max(100).required(),
    address: Joi.string().min(4).max(100).required(),
    phone: Joi.string().min(4).max(100).required(),
  }),
};

exports.showOnePublisherSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};

exports.editPublisherSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
  body: Joi.object({
    full_name: Joi.string().min(4).max(100).required(),
    address: Joi.string().min(4).max(100).required(),
    phone: Joi.string().min(4).max(100).required(),
  }),
};

exports.deleteOnePublisherSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};
