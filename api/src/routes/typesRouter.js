const { Router } = require('express');
const router = Router();

const { getTypesHandler } = require('../handlers/typesHandlers')

// Configurar los routers
router.get("/", getTypesHandler);

module.exports = router;