const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  newOngValidator: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      passwordConfirmation: Joi.string().required().valid(Joi.ref('password')),
      whatsapp: Joi.string().min(10).max(20).required(),
      city: Joi.string().required(),
      uf: Joi.string().length(2).required(),
    }),
  }),

  newIncidentValidator: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required().min(0),
    }),
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
  }),

  requiredIDValidator: celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),

  pageIsNumberValidator: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
};
