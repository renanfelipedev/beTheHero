const database = require('../database');

module.exports = {
  async store(request, response) {
    const { id } = request.body;

    if (!id) {
      return response.status(400).json({ error: 'Please inform your id. ' });
    }

    const ong = await database('ongs').where('id', id).select('name').first();

    if (!ong) {
      return response.status(404).json({ error: 'Ong not found.' });
    }

    return response.json(ong);
  },
};
