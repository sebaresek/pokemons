const request = require('supertest');
const app = require('../../src/app');

describe('Pokemon Model', () => {

  it('debería crear un nuevo Pokemon', async () => {
    const response = await request(app)
      .post('/pokemons') // Ruta para crear un nuevo Pokémon
      .send({
        name: 'Pikachu',
        image: 'pikachu.jpg',
        life: 100,
        stroke: 50,
        defending: 30,
        speed: 80,
        height: 40,
        weight: 6,
      });

    expect(response.status).toBe(201);
  });
});