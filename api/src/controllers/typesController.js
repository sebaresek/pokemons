const axios = require('axios');
const { TypesOfPokemon } = require('../db');
// const { DB_URL } = process.env;

const URL = `https://pokeapi.co/api/v2/`

const getPokemonTypes = async () => {
  const response = await axios.get(`${URL}/type`);
  //accedemos a la propiedad results del obj de respuesta y mapea los nombres de los tipos de pokemons a un nuevo array 
  return response.data.results.map(result => result.name);
};

const savePokemonTypes = async (types) => {
    // convertimos los tipos de pokemon en objetos con la propiedad name 
    const pokemonTypes = types.map(type => ({ name: type }));
    //y luego los inserta en la base de datos utilizando el método bulkCreate
    return TypesOfPokemon.bulkCreate(pokemonTypes);
  };

const getTypesOfPokemon = async () => {
  const types = await TypesOfPokemon.findAll();
  // si es igual a 0, significa que no hay tipos en la base de datos
  if (types.length === 0) {
    //entonces llamamos a la función getPokemonTypes para obtener los tipos de la API
    const apiTypes = await getPokemonTypes();
    // Despues, se llama a la funcion savePokemonTypes() para guardar los tipos obtenidos de la API en la bdd.
    await savePokemonTypes(apiTypes);
    return apiTypes;
  }else {
    return types
  };
};

module.exports = {
    getTypesOfPokemon
}


//* La diferencia es que create solo acepta un objeto con los valores para crear un registro, mientras que bulkCreate acepta una matriz de objetos y crea múltiples registros a la vez.
