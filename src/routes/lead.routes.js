import express from 'express';
import leadController from '../controllers/lead.controller.js';

const router = express.Router();

// Create a new Calificacion
router.post('/', leadController.create);

// Retrieve all Calificaciones
router.get('/', leadController.findAll);

// Update a Calificacion with id
router.put('/:id', leadController.update);

// Delete a Calificacion with id
router.delete('/:id', leadController.deleted);

export default router;