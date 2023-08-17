const { Router } = require('express');
const pokemons = require('./Pokemon');
const tipos = require('./Type');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemons);
router.use('/tipos', tipos);
//router.get('/pokemons/:id', pokemons);
//router.get("/pokemons/:name", pokemons);


module.exports = router;
