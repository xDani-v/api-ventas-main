import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';
import Usuario from './usuario.model.js';
import Lead from './lead.model.js';

const Oportunidad_de_venta = sequelize.define('Oportunidad_de_venta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: DataTypes.STRING(255),
    fecha_de_creacion: DataTypes.DATEONLY,
    fecha_de_cierre_estimada: DataTypes.DATEONLY,
    monto_estimado_de_venta: DataTypes.FLOAT,
    estado: DataTypes.STRING(20),
    probabilidad_de_cierre: DataTypes.FLOAT,
    is_vendido: DataTypes.BOOLEAN,
    id_usuario: {
        type: DataTypes.UUID,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    id_lead: {
        type: DataTypes.UUID,
        references: {
            model: Lead,
            key: 'id'
        }
    },
}, {
    timestamps: false, // deshabilitar timestamps
});



export default Oportunidad_de_venta;