const request = require('supertest');

const app = require('../../src/app');
const database = require('../../src/database');

describe('ONG features', () => {
  beforeEach(async () => {
    await database.migrate.rollback();
    await database.migrate.latest();
  });

  afterAll(async () => {
    await database.destroy();
  });

  it('Should be able to create a new ong', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'Ong criada para teste',
      email: 'ong.teste@email.com.br',
      whatsapp: '01122223333',
      city: 'Cidade Teste',
      uf: 'TS',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
