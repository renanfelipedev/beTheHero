import database from '../database';

class IncidentController {
  async index(request, response) {
    const { id } = request.params;
    const { page = 1 } = request.query;
    const [count] = await database('incidents').count();

    const incidents = id
      ? await database('incidents')
          .where('ong_id', id)
          .join('ongs', 'ong_id', '=', 'incidents.ong_id')
          .limit(5)
          .offset((page - 1) * 5)
          .select([
            'incidents.*',
            'ongs.name',
            'ongs.whatsapp',
            'ongs.email',
            'ongs.city',
            'ongs.uf',
          ])
      : await database('incidents')
          .join('ongs', 'ong_id', '=', 'incidents.ong_id')
          .limit(5)
          .offset((page - 1) * 5)
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
  }

  async store(request, response) {
    const { LoggedOngId: ong_id } = request;
    const { title, description, value } = request.body;

    const [id] = await database('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  }

  async delete(request, response) {
    const { LoggedOngId: ong_id } = request;
    const { id } = request.params;

    const incident = await database('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (!incident) {
      return response.status(404).json({ error: 'Incident not exists.' });
    }
    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not permitted' });
    }

    await database('incidents').where('id', id).delete();

    return response.status(204).send();
  }
}

export default new IncidentController();
