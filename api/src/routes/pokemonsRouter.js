const { Router } = require('express');
const router = Router();

const {  
    getPokemonHandler, 
    getPokemonsHandler, 
    createPokemonHandler ,
    deletedPokemonHandler
} = require('../handlers/pokemonHandlers')

// Configurar los routers
router.get("/", getPokemonsHandler);

router.get('/:id', getPokemonHandler);

router.post('/', createPokemonHandler);

router.delete('/:id', deletedPokemonHandler)


module.exports = router;
