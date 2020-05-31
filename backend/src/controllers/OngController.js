const bcrypt = require('bcryptjs');

const database = require('../database');
const AppError = require('../errors/AppError');

module.exports = {
  async index(request, response) {
    const ongs = await database('ongs').select(
      'name',
      'email',
      'whatsapp',
      'city',
      'uf'
    );

    return response.json(ongs);
  },

  async store(request, response) {
    const {
      name,
      email,
      password,
      passwordConfirmation,
      whatsapp,
      city,
      uf,
    } = request.body;

    if (password !== passwordConfirmation) {
      throw new AppError('As senhas não coincidem');
    }

    const checkEmailExists = await database('ongs').where('email', email);

    if (checkEmailExists.length) {
      throw new AppError('Esse e-mail já possui cadastro');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const ong = await database('ongs').insert({
      name,
      email,
      password: encryptedPassword,
      whatsapp,
      city,
      uf,
    });

    return response.json(ong);
  },
};
