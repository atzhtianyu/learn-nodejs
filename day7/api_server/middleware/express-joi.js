const Joi = require("joi");

const expressJoi = (schemas, options = { strict: false }) => {
  if (!options.strict) {
    options = { allowUnknown: true, stripUnknown: true, ...options };
  }

  delete options.strict;

  return function (req, res, next) {
    ["body", "query", "params"].forEach((key) => {
      if (!schemas[key]) {
        return;
      }
      const schema = Joi.object(schemas[key]);
      const { error, value } = schema.validate(req[key]);
      if (error) {
        throw error;
      } else {
        req[key] = value;
      }
    });
    next();
  };
};

module.exports = expressJoi;
