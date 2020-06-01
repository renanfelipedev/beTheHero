const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authConfig = require('../configs/auth');
const database = require('../database');
const AppError = require('../errors/AppError');

module.exports = {
  async store(request, response) {
    const { email, password } = request.body;

    const checkEmailExists = await database('ongs')
      .where('email', email)
      .first();

    if (!checkEmailExists) {
      throw new AppError('Email ou Senha estão incorretos');
    }

    if (!(await bcrypt.compare(password, checkEmailExists.password))) {
      throw new AppError('Email ou Senha estão incorretos');
    }

    const token = jwt.sign({ id: checkEmailExists.id }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    });

    checkEmailExists.password = undefined;

    return response.json({ ong: checkEmailExists, token });
  },
};
