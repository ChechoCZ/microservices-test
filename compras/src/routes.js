const { Router } = require('express');

const routes = new Router();

const ComprasController = require('./app/controllers/ComprasController');

routes.post('/compras', ComprasController.store);
routes.delete('/compras/:id', ComprasController.destroy);

module.exports = routes;