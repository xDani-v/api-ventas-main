import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    cedula: {
        type: DataTypes.STRING(20),
        unique: true,
    },
    nombres: DataTypes.STRING(255),
    apellidos: DataTypes.STRING(255),
    correo: {
        type: DataTypes.STRING(255),
        unique: true,
    },
    password: DataTypes.STRING(255),
    celular: DataTypes.STRING(20),
    url_foto: DataTypes.STRING(255),
    estado: DataTypes.BOOLEAN,
    rol: DataTypes.STRING(20),
}, {
    timestamps: false,
});



export default Usuario;