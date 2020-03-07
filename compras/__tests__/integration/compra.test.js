const request = require('supertest');

const app = require('../../src/app');

describe('Compra', () => {
  it('Should be able to process a purchase and persist its data to the database', async () => {
    const response = await request(app)
      .post('/api/compras')
      .send({
        description: 'Purchase 01',
        total: 19.99
      });

    expect(response.body).toHaveProperty('_id');
  });

  it('Should be able to cancel a purchase', async () => {
    const { body } = await request(app)
      .post('/api/compras')
      .send({
        description: 'Purchase 01',
        total: 19.99
      });

    const { _id } = body;

    const response = await request(app)
      .delete(`/api/compras/${_id}`)
      .send()

    expect(response.body).toHaveProperty('status', 'cancelado')
  });
});