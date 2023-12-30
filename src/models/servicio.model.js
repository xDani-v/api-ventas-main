import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Servicios = sequelize.define('Servicios', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    nombre_del_servicio: DataTypes.STRING(255),
    precio: DataTypes.FLOAT,
    descripcion: DataTypes.TEXT,
    disponibilidad: DataTypes.FLOAT,
    fecha_de_inicio: DataTypes.DATEONLY,
    fecha_de_fin: DataTypes.DATEONLY,
    estado: DataTypes.BOOLEAN,
    iva: DataTypes.FLOAT,
    categoria: DataTypes.STRING(40),
}, {
    timestamps: false, // deshabilitar timestamps
});

// Crear la tabla si no existe
Servicios.sync();

export default Servicios;