import express from 'express';
import serviciosController from '../controllers/servicios.controller.js';

const router = express.Router();

// Create a new Servicio
router.post('/', serviciosController.crearServicio);

// Retrieve all Servicios
router.get('/', serviciosController.obtenerServicios);
router.get('/:id', serviciosController.obtenerServicioPorId);

// Update a Servicio with id
router.put('/:id', serviciosController.actualizarServicio);

// Delete a Servicio with id
router.delete('/:id', serviciosController.eliminarServicio);

export default router;