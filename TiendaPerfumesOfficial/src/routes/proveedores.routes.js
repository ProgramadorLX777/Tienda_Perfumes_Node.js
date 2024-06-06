// Proveedores:
const { Router } = require('express');
const router = Router();
const Proveedores = require('../db/controller/controllerProveedores')

// INSERTAR PROVEEDORES:
router.post('/createProveedores', async (req, res) => {
    try {
        const nuevoProveedor = await Proveedores.insertarProveedor(req.body.rut_proveedor,req.body.id_producto_asociado,req.body.nombre_proveedor,req.body.region_proveedor, req.body.comuna_proveedor, req.body.numero_local, req.body.fono_proveedor);
        res.status(200).json({message: 'Ingresado Correctamente!!',id: nuevoProveedor.insertId})
    } catch (error) {
        console.error('Error al insertar producto!!', error);
        res.status(500).json({ error: 'Error al insertar producto!!' });
    }
});

// OBTENER PROVEEDORES:
router.get('/selectProveedores/:id_proveedor', async (req, res) => {
    try {
        const obtenerProveedor = await Proveedores.obtenerProveedor(req.params.id_proveedor);
        res.status(200).json({message: 'Registro obtenido Correctamente!!', producto: obtenerProveedor});
    } catch (error) {
        console.error('Error al obtener productos!!', error);
        res.status(500).json({ error: 'Error al obtener producto!!' });
    }
});

// ACTUALIZAR PROVEEDORES:
router.put('/updateProveedores', async (req, res) => {
    try {
        const actualizarProveedor = await Proveedores.actualizarProveedor(req.body.id_proveedor, req.body.rut_proveedor, req.body.id_producto_asociado, req.body.nombre_proveedor, req.body.region_proveedor, req.body.comuna_proveedor, req.body.numero_local,req.body.fono_proveedor);
        res.status(200).json({message: 'Proveedor actualizado correctamente!!', proveedor: actualizarProveedor});
    } catch (error) {
        console.error('Error al actualizar producto!!', error);
        res.status(500).json({ error: 'Error al actualizar proveedor!!' });
    }
});

// ELIMINAR PROVEEDORES:
router.delete('/deleteProveedores', async (req, res) => {
    try {
        const eliminarProveedor = await Proveedores.eliminarProveedor(req.body.id_proveedor);
        res.status(200).json({message: 'Eliminado Correctamente!!', id_proveedor: eliminarProveedor.insertId})
    } catch (error) {
        console.error('Error al eliminar producto!!', error);
        res.status(500).json({ error: 'Error al eliminar producto!!' });
    }
});

module.exports = router
