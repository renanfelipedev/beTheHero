import crypto from 'crypto';
import database from '../database';

class OngController {
  async index(request, response) {
    const ongs = await database('ongs').select('*');

    return response.json(ongs);
  }

  async store(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await database('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  }
}

export default new OngController();
