const jwt = require('jsonwebtoken');

const authConfig = require('../configs/auth');
const AppError = require('../errors/AppError');

module.exports = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret);
    const { id } = decoded;

    request.user = { id };

    return next();
  } catch (err) {
    console.log(err);
    throw new AppError('Invalid JWT token', 401);
  }
};
