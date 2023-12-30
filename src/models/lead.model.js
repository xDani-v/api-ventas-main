import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Lead = sequelize.define('Lead', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    nombres: DataTypes.STRING(255),
    apellidos: DataTypes.STRING(255),
    cedula: DataTypes.STRING(255),
    correo: DataTypes.STRING(255),
    telefono: DataTypes.STRING(20),
    cargo: DataTypes.STRING(255),
    estado: DataTypes.STRING,
    fecha_de_registro: DataTypes.DATEONLY,
    fuente_de_adquisicion: DataTypes.STRING,
}, {
    timestamps: false, // deshabilitar timestamps
});



export default Lead;