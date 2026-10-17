import { Propiedad } from '../models/propiedad.model.js';

// 1. Obtener todas las propiedades (para el catálogo principal)
export const obtenerPropiedades = async (req, res) => {
  try {
    const propiedades = await Propiedad.find();
    res.status(200).json(propiedades);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las propiedades', error: error.message });
  }
};

// 2. Crear una nueva propiedad (desde el formulario de administración)
export const crearPropiedad = async (req, res) => {
  try {
    const nuevaPropiedad = new Propiedad(req.body);
    const propiedadGuardada = await nuevaPropiedad.save();
    res.status(201).json({
      mensaje: 'Propiedad creada exitosamente',
      propiedad: propiedadGuardada
    });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la propiedad', error: error.message });
  }
};

// 3. Obtener una propiedad por su ID (para la vista de detalle y mapa)
export const obtenerPropiedadPorId = async (req, res) => {
  try {
    const propiedad = await Propiedad.findById(req.params.id);
    if (!propiedad) {
      return res.status(404).json({ mensaje: 'Propiedad no encontrada' });
    }
    res.status(200).json(propiedad);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar la propiedad', error: error.message });
  }
};

// 4. Eliminar una propiedad
export const eliminarPropiedad = async (req, res) => {
  try {
    const propiedadEliminada = await Propiedad.findByIdAndDelete(req.params.id);
    if (!propiedadEliminada) {
      return res.status(404).json({ mensaje: 'Propiedad no encontrada para eliminar' });
    }
    res.status(200).json({ mensaje: 'Propiedad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la propiedad', error: error.message });
  }
};