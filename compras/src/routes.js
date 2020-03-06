const { Router } = require('express');

const routes = new Router();

const ComprasController = require('./app/controllers/ComprasController');

routes.get('/compras', ComprasController.index);
routes.get('/compras/:id', ComprasController.show);
routes.post('/compras', ComprasController.store);
routes.delete('/compras/:id', ComprasController.destroy);

module.exports = routes;