import Servicios from '../models/servicio.model.js';

// Crear un nuevo servicio
async function crearServicio(req, res) {
    try {
        const servicio = await Servicios.create(req.body);
        res.status(201).json(servicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener todos los servicios
async function obtenerServicios(req, res) {
    try {
        const servicios = await Servicios.findAll();
        res.status(200).json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un servicio por su ID
async function obtenerServicioPorId(req, res) {
    try {
        const id = req.params.id;
        const servicio = await Servicios.findByPk(id);
        if (servicio) {
            res.status(200).json(servicio);
        } else {
            res.status(404).json({ error: "Servicio no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un servicio por id
async function actualizarServicio(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await Servicios.update(req.body, { where: { id: id } });
        if (updated) {
            const updatedService = await Servicios.findOne({ where: { id: id } });
            res.status(200).json(updatedService);
        } else {
            res.status(404).send('Servicio no encontrado');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un servicio por id
async function eliminarServicio(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Servicios.destroy({ where: { id: id } });
        if (deleted) {
            res.status(204).send("Servicio eliminado");
        } else {
            res.status(404).send('Servicio no encontrado');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default { crearServicio, obtenerServicios, actualizarServicio, eliminarServicio, obtenerServicioPorId };