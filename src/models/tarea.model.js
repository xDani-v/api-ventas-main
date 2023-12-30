import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';
import Usuario from './usuario.model.js';
import Oportunidad_de_venta from './oportunidad_venta.model.js';

const Tarea = sequelize.define('Tarea', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: DataTypes.STRING(255),
    descripcion: DataTypes.TEXT,
    cliente: DataTypes.STRING(255),
    fecha_de_asignacion: DataTypes.DATEONLY,
    fecha_de_inicio: DataTypes.DATEONLY,
    fecha_de_finalizacion: DataTypes.DATEONLY,
    hora_de_inicio: DataTypes.TIME,
    hora_de_finalizacion: DataTypes.TIME,
    ubicacion: DataTypes.STRING(255),
    prioridad: DataTypes.STRING(50),
    estado: DataTypes.BOOLEAN,
    id_usuario: {
        type: DataTypes.UUID,
        references: {
            model: Usuario,
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



export default Tarea;