const { Router } = require('express');

const routes = new Router();

const SendMailController = require('./app/controllers/SendMailController');

routes.post('/avisos', SendMailController.sendMail);

module.exports = routes;