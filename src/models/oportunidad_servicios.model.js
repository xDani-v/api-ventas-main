import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';
import Oportunidad_de_venta from './oportunidad_venta.model.js';
import Servicios from './servicio.model.js';

const Oportunidad_Servicios = sequelize.define('Oportunidad_Servicios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_servicios: {
        type: DataTypes.UUID,
        references: {
            model: Servicios,
            key: 'id'
        }
    },
    id_oportunidad: {
        type: DataTypes.INTEGER,
        references: {
            model: Oportunidad_de_venta,
            key: 'id'
        }
    },
}, {
    timestamps: false, // deshabilitar timestamps
});



export default Oportunidad_Servicios;