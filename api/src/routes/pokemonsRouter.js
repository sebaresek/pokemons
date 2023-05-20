const { Router } = require('express');
const router = Router();

const {  
    getPokemonHandler, 
    getPokemonsHandler, 
    createPokemonHandler 
} = require('../handlers/pokemonHandlers')

// Configurar los routers
router.get("/", getPokemonsHandler);

router.get('/:id', getPokemonHandler);

router.post('/', createPokemonHandler);


module.exports = router;
