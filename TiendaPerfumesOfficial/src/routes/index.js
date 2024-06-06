const { Router } = require('express');
const router = Router();

// INDEX <--> ROUTES <--> CONTROLADORES <-- CONEXION

router.get('/home', (req, res) => {
    res.send('home')
})

router.get('/about', (req, res) => {
    res.send('about')
})

// Imports: (Uno por cada archivo de rutas)
const productosRoutes = require('./productos.routes');
const proveedoresRoutes = require('./proveedores.routes');
const clientesRoutes = require('./clientes.routes');
const pedidosRoutes = require('./pedidos.routes');

// Uses: (Uno por cada archivo de rutas)
router.use(productosRoutes)
router.use(proveedoresRoutes)
router.use(clientesRoutes)
router.use(pedidosRoutes)

module.exports = router