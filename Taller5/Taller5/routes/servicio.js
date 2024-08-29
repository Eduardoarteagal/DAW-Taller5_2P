const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/servicios');

// Ruta para obtener la lista de servicios
router.get('/', serviciosController.getServicios);

// Ruta para obtener los detalles de un servicio
router.get('/:id', serviciosController.getServicioById);

// Ruta para obtener los servicios contratados por un cliente
router.get('/cliente/:clienteId', serviciosController.getServiciosByClienteId);

module.exports = router;