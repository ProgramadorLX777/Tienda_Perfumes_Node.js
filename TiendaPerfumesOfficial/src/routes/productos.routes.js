// Productos:
const express = require('express');
const router = express.Router();
const Producto = require('../db/controller/controllerProductos');

// INSERTAR PRODUCTOS:
router.post('/createProductos', async (req, res) => {
    try {
        const nuevoProducto = await Producto.insertarProducto(req.body.nombre_producto,req.body.cantidad_ml,req.body.precio_producto);
        res.status(200).json({message: 'Ingresado Correctamente!!',id: nuevoProducto.insertId})
    } catch (error) {
        console.error('Error al insertar producto!!', error);
        res.status(500).json({ error: 'Error al insertar producto!!' });
    }
});

// OBTENER PRODUCTOS:
router.get('/selectProductos/:id_producto', async (req, res) => {
    try {
        const obtenerProducto = await Producto.obtenerProductos(req.params.id_producto);
        res.status(200).json({message: 'Registro obtenido Correctamente!!', producto: obtenerProducto});
    } catch (error) {
        console.error('Error al obtener productos!!', error);
        res.status(500).json({ error: 'Error al obtener producto!!' });
    }
});

// ACTUALIZAR PRODUCTOS:
router.put('/updateProductos', async (req, res) => {
    try {
        const actualizarProducto = await Producto.actualizarProducto(req.body.id_producto, req.body.nombre_producto, req.body.cantidad_ml, req.body.precio_producto);
        res.status(200).json({message: 'Producto actualizado correctamente!!', producto: actualizarProducto});
    } catch (error) {
        console.error('Error al actualizar producto!!', error);
        res.status(500).json({ error: 'Error al actualizar producto!!' });
    }
});

// ELIMINAR PRODUCTOS:
router.delete('/deleteProductos', async (req, res) => {
    try {
        const eliminarProducto = await Producto.eliminarProducto(req.body.id_producto);
        res.status(200).json({message: 'Eliminado Correctamente!!', id_producto: eliminarProducto.insertId})
    } catch (error) {
        console.error('Error al eliminar producto!!', error);
        res.status(500).json({ error: 'Error al eliminar producto!!' });
    }
});

module.exports = router

