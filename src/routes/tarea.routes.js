import express from 'express';
import tareaController from '../controllers/tarea.controller.js';

const router = express.Router();

// Create a new Tarea
router.post('/', tareaController.create);

// Retrieve all Tareas
router.get('/', tareaController.findAll);

// Update a Tarea with id
router.put('/:id', tareaController.update);

// Delete a Tarea with id
router.delete('/:id', tareaController.deleted);

export default router;