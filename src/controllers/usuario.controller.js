import Usuario from '../models/usuario.model.js';


// Create
const create = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).send(usuario);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const usuario = await Usuario.findAll();
        res.send(usuario);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Usuario.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Usuario was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Usuario.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Usuario was deleted successfully.' });
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