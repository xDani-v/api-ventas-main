import express from 'express';
import oportunidadServiciosController from '../controllers/oportunidad_servicios.controller.js';

const router = express.Router();

// Create a new Oportunidad_Servicios
router.post('/', oportunidadServiciosController.create);

// Retrieve all Oportunidad_Servicios
router.get('/', oportunidadServiciosController.findAll);

router.get('/servicios-relacionados/:id', oportunidadServiciosController.getServiciosRelacionados);

// Ruta para obtener los servicios no relacionados
router.get('/servicios-no-relacionados/:id', oportunidadServiciosController.getServiciosNoRelacionados);

// Update a Oportunidad_Servicios with id
router.put('/:id', oportunidadServiciosController.update);



router.delete('/:id', oportunidadServiciosController.deleteOportunidadServicio);

export default router;