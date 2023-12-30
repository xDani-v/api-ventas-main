import Tarea from '../models/tarea.model.js';

// Create
const create = async (req, res) => {
    try {
        const tarea = await Tarea.create(req.body);
        res.status(201).send(tarea);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const tareas = await Tarea.findAll();
        res.send(tareas);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Tarea.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Tarea was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Tarea.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Tarea was deleted successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default {
    create,
    findAll,
    update,
    deleted
};