import express from 'express';
import oportunidadVentaController from '../controllers/oportunidad_venta.controller.js';

const router = express.Router();

// Create a new Oportunidad_de_venta
router.post('/', oportunidadVentaController.create);

// Retrieve all Oportunidad_de_venta
router.get('/', oportunidadVentaController.findAll);
router.get('/vendidos', oportunidadVentaController.getvendidos);
router.get('/ven', oportunidadVentaController.getven);
router.get('/:id', oportunidadVentaController.findOne);

// Update a Oportunidad_de_venta with id
router.put('/:id', oportunidadVentaController.update);

// Delete a Oportunidad_de_venta with id
router.put('/estado/:id', oportunidadVentaController.cambiarEstado);

export default router;