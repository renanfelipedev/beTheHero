const AppError = require('../errors/AppError');

module.exports = function (err, request, response, next) {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', error: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', error: 'Internal server error.' });
};
