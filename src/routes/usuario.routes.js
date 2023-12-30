import express from 'express';
import usuarioController from '../controllers/usuario.controller.js';

const router = express.Router();

// Create a new Calificacion
router.post('/', usuarioController.create);

// Retrieve all Calificaciones
router.get('/', usuarioController.findAll);

// Update a Calificacion with id
router.put('/:id', usuarioController.update);

// Delete a Calificacion with id
router.delete('/:id', usuarioController.deleted);

export default router;