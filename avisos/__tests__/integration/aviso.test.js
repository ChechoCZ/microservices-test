const request = require('supertest');

const app = require('../../src/app');

describe('Aviso', () => {
  it('Should send an email with purchase information', async () => {
    const response = await request(app)
      .post('/api/avisos')
      .send({
        description: 'Purchase 01',
        total: 19.99
      });

    expect(response.status).toBe(200);
  });
});