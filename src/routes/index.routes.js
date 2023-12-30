import express from 'express';
import usuarioRoutes from './usuario.routes.js';
import leadRoutes from './lead.routes.js';
import serviciosRoutes from './servicios.routes.js';
import oportunidadServicioRoutes from './oportunidad_servicios.routes.js';
import oportunidadventaRoutes from './oportunidad_venta.routes.js';
import tareaRoutes from './tarea.routes.js';

const router = express.Router();

router.use('/usuario', usuarioRoutes);
router.use('/lead', leadRoutes);
router.use('/servicios', serviciosRoutes);
router.use('/opservicio', oportunidadServicioRoutes);
router.use('/opventa', oportunidadventaRoutes);
router.use('/tarea', tareaRoutes);

export default router;