import Oportunidad_Servicios from '../models/oportunidad_servicios.model.js';
import db from '../database/db.js';

// Create
const create = async (req, res) => {
    try {
        const oportunidad_servicio = await Oportunidad_Servicios.create(req.body);
        res.status(201).send(oportunidad_servicio);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const oportunidad_servicios = await Oportunidad_Servicios.findAll();
        res.send(oportunidad_servicios);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const findByIdOportunidad = async (req, res) => {
    try {
        const id_oportunidad = req.params.id; // Asume que el id de la oportunidad se pasa como un parámetro de ruta
        const oportunidad_servicios = await Oportunidad_Servicios.findAll({
            where: {
                id_oportunidad: id_oportunidad
            }
        });
        res.send(oportunidad_servicios);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Oportunidad_Servicios.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Oportunidad_Servicios was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Oportunidad_Servicios.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Oportunidad_Servicios was deleted successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getServiciosRelacionados = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await db.query('SELECT * FROM obtener_servicios_relacionados(:id)',
            {
                replacements: { id: id },
                type: db.QueryTypes.SELECT
            });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getServiciosNoRelacionados = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await db.query('SELECT * FROM obtener_servicios_no_relacionados(:id)',
            {
                replacements: { id: id },
                type: db.QueryTypes.SELECT
            });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteOportunidadServicio = async (req, res) => {
    const idServicio = req.body.id_servicio;
    const idOportunidad = req.params.id;

    try {
        const results = await db.query('SELECT eliminar_oportunidad_servicios(:idServicio, :idOportunidad)',
            {
                replacements: { idServicio: idServicio, idOportunidad: idOportunidad },
                type: db.QueryTypes.SELECT
            });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default {
    create,
    findAll,
    update,
    deleted,
    findByIdOportunidad,
    getServiciosRelacionados,
    getServiciosNoRelacionados,
    deleteOportunidadServicio
};