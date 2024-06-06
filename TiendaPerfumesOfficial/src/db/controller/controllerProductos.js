// ControllerProductos.js
const mysql = require('mysql2');
const { resolve } = require('path');
const conn = require('../conexion');
const { rejects } = require('assert');

// Definir la tabla a utilizar:
const TABLA = "productos";

// Función controller para Insertar Productos:
function insertarProducto(nombre_producto, cantidad_ml, precio_producto) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} VALUES (null,'${nombre_producto}', '${cantidad_ml}', '${precio_producto}')`;
        console.log(query);
        conn.query(query,(error, results) => {
            if (error) {
                console.error('Error al insertar el producto!!', error);
                return reject(error);
            }
            // Si la inserción es exitosa, envía una respuesta adecuada
            resolve({ message: 'Producto creado exitosamente!!', results });
        });
    });
}

// Función controller para obtener Productos:
function obtenerProductos(id_producto, nombre_producto, cantidad_ml, precio_producto) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} WHERE id_producto =?`;
        console.log(query);
        conn.query(query, [id_producto, nombre_producto, cantidad_ml, precio_producto],   (error, results) => {
            if (error) {
                console.error('Error al obtener el producto!!', error);
                return reject(error);
            }
            // Si la consulta es exitosa, envía una respuesta adecuada
            resolve({ message: 'Producto obtenido exitosamente!!', results });
        });
    });
}

// Función controller para actualizar Productos:
function actualizarProducto(id_producto, nombre_producto, cantidad_ml, precio_producto) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${TABLA} SET nombre_producto =?, cantidad_ml =?, precio_producto =? WHERE id_producto ='${id_producto}'`;
        console.log(query);
        conn.query(query, [nombre_producto, cantidad_ml, precio_producto, id_producto], (error, results) => {
            if (error) {
                console.error('Error al actualizar el producto!!', error);
                return reject(error);
            }
            // Si la actualización es exitosa, envía una respuesta adecuada
            resolve({ message: 'Producto actualizado exitosamente!!', results });
        });
    });
}

// Función controller para eliminar Productos:
function eliminarProducto(id_producto) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${TABLA} WHERE id_producto ='${id_producto}'`;
        console.log(query);
        conn.query(query,[id_producto],(error, results) => {
            if (error) {
                console.error('Error al eliminar el producto!!', error);
                return reject(error);
            }
            // Si la eliminación es exitosa, envía una respuesta adecuada
            resolve({ message: 'Producto eliminado exitosamente!!', results });
        });
    });
}

module.exports = { insertarProducto, obtenerProductos, actualizarProducto, eliminarProducto };