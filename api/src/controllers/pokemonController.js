const axios = require("axios");
const { Pokemon, TypesOfPokemon } = require('../db');
const URL = `https://pokeapi.co/api/v2/pokemon`




// cleanObject toma un obj como entrada y devuelve un otro nuevo que contiene solo las propiedades específicas que se necesitan
// base_stat es un atributo que se ubica en los obj de las estadísticas de un Pokémon
// la imagen se encuentran dentro de un obj "sprites". Dentro hay un atributo llamado "front_default" que contiene la URL de la imagen
const cleanObject = (obj) => {
    const types = obj.types.map(type => type.type.name);
    return {
        id: obj.id,
        name: obj.name,
        image: obj.sprites.front_default,
        life: obj.stats[0].base_stat,   
        stroke: obj.stats[1].base_stat,
        defending: obj.stats[2].base_stat,
        speed: obj.stats[5].base_stat,
        height: obj.height,
        weight: obj.weight,
        types: types
    };
};


const deletedPokemon = async(id) => {
    const deletedPokemon = await Pokemon.destroy({ where: { id } });
    return deletedPokemon;
} 


const createPokemon = async (name, image, life, stroke, defending, speed, height, weight, typeId) => {
    const pokemon = await Pokemon.create({ name, image, life, stroke, defending, speed, height, weight });
    //agregamos una nueva entrada en la tabla de relación que indica que el Pokemon este pertenece al tipo de Pokemon que se especifica mediante el typeId
    await pokemon.addTypesOfPokemon(typeId);
    return pokemon;
};


const getAllPokemons = async () => {
    const databasePokemons = await Pokemon.findAll({
        include: {
            model: TypesOfPokemon,
            attributes: ['name'],
            through: { attributes: [] }
        }
    });
  // Obtenemos todos los pokemons de la API
  const apiResponse = (await axios.get(`${URL}`)).data.results;
  // array de objetos que contiene la información básica >>>
  // console.log(apiResponse) <<< Mira xd
  const apiPromises = apiResponse.map(pokemon => axios.get(pokemon.url));
  // esperamos a que todas las promesas se resuelvan del map y devolvemos un nuevo arreglo de respuestas de la API del Pokemon.
  const apiResponses = await Promise.all(apiPromises);
  // añadimos el formato que queremos mostrar 
  const apiPokemons = apiResponses.map(res => cleanObject(res.data));

  // Combinamos los pokemons de la base de datos y de la API y devolvemos
  return [...databasePokemons, ...apiPokemons];
};


const getPokemonById = async (id, source) => {
    const pokemon =
        source === 'api'
        ? await axios.get(`${URL}/${id}`)
        //se procesa con .then el resultado y se aplica la función cleanObject al objeto .data 
        .then(res => cleanObject(res.data)) 
        : await Pokemon.findByPk(id, {include: { 
            //incluimos con include: el model de tipo de pokemon
            model: TypesOfPokemon,
            //indicamos que queremos solo el atributo name
            attributes: ['name'],
            // indicamos que no se incluyan los atributos de la tabla de relación
            through: { attributes: [] } 
        },
    });
    return pokemon;
};



// const searchPokemonByName = async (name) => {
//     const databasePokemons = await Pokemon.findAll({ where: { name } });
    
//     const apiPokemonsRaw = (await axios.get(`${URL}`)).data.results;
//     const filteredApi = apiPokemonsRaw
//         //convertimos todo a minúsculas asi ambos valores serán iguales
//         .filter(pokemon => pokemon.name.toLowerCase() == name.toLowerCase())
//         // se mapea, se procesa con .then el resultado y se aplica la función cleanObject al objeto .data
//         .map(pokemon => axios.get(pokemon.url).then(res => cleanObject(res.data)));
//     // Comprobamos si se encontraron resultados en ambas fuentes de datos
//     if (filteredApi.length === 0 && databasePokemons.length === 0) {
//       throw new Error(`El Pokemon con el nombre ${name} no existe`)};
//     // devolvemos una promesa con los resultados combinados de ambas fuentes de datos, que se resuelve cuando todas las promesas del arreglo se han resuelto

//     // Si solo hay un resultado, lo devolvemos directamente como objeto
//     if (filteredApi.length + databasePokemons.length === 1) {
//     return filteredApi.length > 0 ? filteredApi[0] : databasePokemons[0];
//     };
    
//     // De lo contrario, devolvemos un array con los resultados combinados
//     return Promise.all([...filteredApi, ...databasePokemons]);
// };





const searchPokemonByName = async (name) => {
    const databasePokemons = await Pokemon.findAll({ where: { name } });
  
    const apiPokemon = await axios.get(`${URL}/${name}`)
      .then(res => cleanObject(res.data));
  
    // Comprobamos si no se encontraron resultados en ambas fuentes de datos
    if (apiPokemon === null && databasePokemons === null) {
      throw Error(`El Pokémon con el nombre ${name} no existe`);
    }
  
    // Si solo hay un resultado, lo devolvemos directamente como objeto
    if (apiPokemon !== null ) {
        return apiPokemon;
    } else if (databasePokemons.length !== null) {
        return databasePokemons;
    }
  
    // Combinamos los resultados de ambas fuentes de datos
    return [...apiPokemon, ...databasePokemons];
  };
  



module.exports = {
    createPokemon,
    getPokemonById,
    getAllPokemons,
    searchPokemonByName,
    deletedPokemon
};
