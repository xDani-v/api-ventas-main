import Lead from '../models/lead.model.js';


// Create
const create = async (req, res) => {
    try {
        const lead = await Lead.create(req.body);
        res.status(201).send(lead);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const lead = await Lead.findAll();
        res.send(lead);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Lead.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Lead was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Lead.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Lead was deleted successfully.' });
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