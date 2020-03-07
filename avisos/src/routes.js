const { Router } = require('express');

const routes = new Router();

const AvisosController = require('./app/controllers/AvisosController');

routes.post('/avisos', AvisosController.store);

module.exports = routes;