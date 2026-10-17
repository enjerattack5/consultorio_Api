import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import propiedadRoutes from './routes/propiedad.routes.js'; // <--- Importar rutas

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// --- USAR LAS RUTAS DE PROPIEDADES ---
app.use('/api/propiedades', propiedadRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});