import express from 'express'
import cors from 'cors';
import db from "../database/db.js";
import routes from '../routes/index.routes.js';

import Usuario from '../models/usuario.model.js';
import Servicio from '../models/servicio.model.js';
import Lead from '../models/lead.model.js';
import Oportunidad_Servicios from '../models/oportunidad_servicios.model.js';
import Oportunidad_de_venta from '../models/oportunidad_venta.model.js';
import Tarea from '../models/tarea.model.js';

const app = express();

Lead.sync({ force: false });
Usuario.sync({ force: false });
Servicio.sync({ force: false });

Oportunidad_de_venta.sync({ force: false });
Oportunidad_Servicios.sync({ force: false });
Tarea.sync({ force: false });

app.use(cors());
app.use(express.json())
app.use('/api', routes);


try {
    await db.authenticate();
    console.log("conexion exitosa");
} catch (error) {
    console.log(error);
}


app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.listen(9002, () => {
    console.log('Server running http://localhost:9002/')
})