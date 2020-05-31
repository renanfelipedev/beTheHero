const request = require('supertest');

const { server } = require('../../src/app');
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
    const response = await request(server).post('/ongs').send({
      name: 'Ong criada para teste',
      email: 'ong.teste@email.com.br',
      password: '123123',
      passwordConfirmation: '123123',
      whatsapp: '01122223333',
      city: 'Cidade Teste',
      uf: 'TS',
    });

    expect(response.body).toEqual([1]);
  });

  it('Should not be able to create a new ong with same e-mail', async () => {
    await request(server).post('/ongs').send({
      name: 'Ong criada para teste',
      email: 'ong.teste@email.com.br',
      password: '123123',
      passwordConfirmation: '123123',
      whatsapp: '01122223333',
      city: 'Cidade Teste',
      uf: 'TS',
    });

    const response = await request(server).post('/ongs').send({
      name: 'Ong criada para teste',
      email: 'ong.teste@email.com.br',
      password: '123123',
      passwordConfirmation: '123123',
      whatsapp: '01122223333',
      city: 'Cidade Teste',
      uf: 'TS',
    });

    expect(response.body).toHaveProperty('error');
  });
});
