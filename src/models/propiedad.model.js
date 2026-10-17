import mongoose from 'mongoose';

const propiedadSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  tipoOperacion: { type: String, enum: ['Venta', 'Renta'], default: 'Venta' },
  tipoInmueble: { type: String, required: true }, // Terreno, Casa, Departamento
  ubicacion: {
    direccion: { type: String, required: true },
    ciudad: { type: String, required: true },
    estado: { type: String, required: true },
    latitud: { type: Number },
    longitud: { type: Number }
  },
  caracteristicas: {
    estacionamientos: { type: Number, default: 0 },
    recamaras: { type: Number, default: 0 },
    banos: { type: Number, default: 0 },
    superficieM2: { type: Number, default: 0 }
  },
  imagenes: [{ type: String }], // URLs o rutas de fotos
  videos: [{ type: String }],     // URLs o rutas de videos
  estado: { type: String, enum: ['Disponible', 'Vendido'], default: 'Disponible' }
}, {
  timestamps: true
});

export const Propiedad = mongoose.model('Propiedad', propiedadSchema);