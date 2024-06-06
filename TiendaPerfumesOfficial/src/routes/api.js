/*const { Router } = require('express');
const ress = require('../res/response');
const controllerProductos = require('../db/controller/controllerProductios');

routerApi = new Router();

routerApi.get('/',(req, res) => {
    const lista = controllerProductos.obtenerTodos()
    .then((items) => {
        res.success(req, res, items, 200)
    })
});

module.exports = routerApi;*/