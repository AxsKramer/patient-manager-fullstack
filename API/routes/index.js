const express = require('express');
const router = express.Router();
const {getClients, newClient, getClientById, updateClient, deleteClient} = require('../controllers/patientController');

router.get('/patients', getClients);

router.post('/patients', newClient);

router.get('/patients/:id', getClientById);

router.put('/patients/:id', updateClient);

router.delete('patients/:id', deleteClient);

module.exports = router;