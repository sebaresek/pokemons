// /* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
// const session = require('supertest-session');
// const app = require('../../src/app.js');
// const { Pokemon, conn } = require('../../src/db.js');

// const agent = session(app);
// const pokemon = {
//   name: 'Pikachu',
// };

// describe('Pokemon routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Pokemon.sync({ force: true })
//     .then(() => Pokemon.create(pokemon)));
//   describe('GET /pokemons', () => {
//     it('should get 200', () =>
//       agent.get('/pokemons').expect(200)
//     );
//   });
// });
// la expresión expect(response.body.error).toBeDefined() se utiliza para verificar si hay una respuesta de error definida en el cuerpo de la respuesta recibida durante una prueba.


const request = require('supertest');
const app = require('../../src/app'); 

describe('Peticiones de tipo GET a la ruta /pokemons/:id', () => {
  it('debería devolver un Pokémon por ID de la API', async () => {
    const id = 1; 

    const response = await request(app).get(`/pokemons/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    
  });

  it('debería devolver un error si el pokemon con el id especificado no existe', async () => {
    const id = 9999; 

    const response = await request(app).get(`/pokemons/${id}`);

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});

describe('Peticiones de tipo GET a la ruta /pokemons?name=${name} ', () => {
  it('debería devolver un Pokémon por ID de la API', async () => {
    const name = 'charizard'; 

    const response = await request(app).get(`/pokemons?name=${name}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    
  });

  it('debería devolver un error si el pokemon con el id especificado no existe', async () => {
    const name = 'narnia'; 

    const response = await request(app).get(`/pokemons?name=${name}`);

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});


describe('Peticiones de tipo GET a la ruta /types/ ', () => {
  it('debería devolver un array con los tipos de pokemons de la API', async () => {

    const response = await request(app).get(`/types/`);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    
  });
});
