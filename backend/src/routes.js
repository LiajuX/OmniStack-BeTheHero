const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/incidentController'); 
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

// Rota para listar todas as ONGs do banco de dados
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Listar casos específicos de uma ONG
routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;