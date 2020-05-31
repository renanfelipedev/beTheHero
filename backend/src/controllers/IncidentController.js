const database = require('../database');
const AppError = require('../errors/AppError');

module.exports = {
  async index(request, response) {
    const { id } = request.params;
    const { page = 1 } = request.query;
    const [count] = await database('incidents').count();
    const pageLimit = 4;

    const incidents = id
      ? await database('incidents')
          .where('ong_id', id)
          .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
          .limit(pageLimit)
          .offset((page - 1) * pageLimit)
          .select([
            'incidents.*',
            'ongs.name',
            'ongs.whatsapp',
            'ongs.email',
            'ongs.city',
            'ongs.uf',
          ])
      : await database('incidents')
          .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
          .limit(pageLimit)
          .offset((page - 1) * pageLimit)
          .select([
            'incidents.*',
            'ongs.name',
            'ongs.whatsapp',
            'ongs.email',
            'ongs.city',
            'ongs.uf',
          ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  },

  async store(request, response) {
    const { id } = request.user;
    const { title, description, value } = request.body;

    const incident = await database('incidents').insert({
      title,
      description,
      value,
      ong_id: id,
    });

    return response.json(incident);
  },

  async delete(request, response) {
    const { id: ong_id } = request.user;
    const { id } = request.params;

    const incident = await database('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (!incident) {
      throw new AppError('Este incidente não existe.');
    }

    if (incident.ong_id !== ong_id) {
      throw new AppError('Operação não permitida.', 401);
    }

    await database('incidents').where('id', id).delete();

    return response.status(204).send();
  },
};
