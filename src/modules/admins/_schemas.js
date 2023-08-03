const Joi = require("joi");

exports.postLoginAdmins = {
  body: Joi.object({
    username: Joi.string().min(4).max(100).required(),
    password: Joi.string().required(),
  }),
};

exports.postAdminsSchema = {
  body: Joi.object({
    full_name: Joi.string().min(4).max(100).required(),
    username: Joi.string().min(4).max(100).required(),
    password: Joi.string().required(),
  }),
};

exports.showOneAdminSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};



exports.editAdminSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
  body: Joi.object({
    full_name: Joi.string().min(4).max(100).required(),
    username: Joi.string().min(4).max(100).required(),
    password: Joi.string().required(),
  }),
};


exports.deleteOneAdminSchema = {
  params: Joi.object({
    id: Joi.string().min(24).max(24),
  }),
};