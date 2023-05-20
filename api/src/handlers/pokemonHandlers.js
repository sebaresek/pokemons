const { 
    createPokemon,
    getPokemonById,
    getAllPokemons,
    searchPokemonByName
} = require('../controllers/pokemonController')


const getPokemonsHandler = async (req, res) => {
    const {name} = req.query;
    try {
        const results = name ? await searchPokemonByName(name) : await getAllPokemons()
        res.status(200).json(results)
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
}


const getPokemonHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'bdd' : 'api';
    //si de isNAN el id va a ser bdd sino api
    try {
        const pokemon = await getPokemonById(id, source);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(400).json({ error: `El Pokemon con el ID ${id} existe` });
    }
};
      


const createPokemonHandler = async (req, res) => {
    const { name, image, life, stroke, defending, speed, height, weight, typeId } = req.body; 
    try {  
      if (!name || !image || !life || !stroke || !defending) {
        return res.status(400).json({ error: "Faltan campos obligatorios!" });
      }
      const newPokemon = await createPokemon(name, image, life, stroke, defending, speed, height, weight, typeId);
      res.status(201).json('Tu Pokemon fue creado con exito !');
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
};
  
  
  

module.exports = {
    getPokemonHandler,
    getPokemonsHandler,
    createPokemonHandler
}