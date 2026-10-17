import { Router } from 'express';
import { 
  obtenerPropiedades, 
  crearPropiedad, 
  obtenerPropiedadPorId, 
  eliminarPropiedad 
} from '../controllers/propiedad.controller.js';

const router = Router();

router.get('/', obtenerPropiedades);         // GET: Listar todas
router.post('/', crearPropiedad);          // POST: Crear nueva propiedad
router.get('/:id', obtenerPropiedadPorId); // GET: Ver una sola por ID
router.delete('/:id', eliminarPropiedad);  // DELETE: Borrar propiedad

export default router;