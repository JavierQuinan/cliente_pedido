import * as mongoose from 'mongoose';

export const RelacionRealizaSchema = new mongoose.Schema(
  {
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    fecha: { type: Date, default: Date.now },
    cantidad: { type: Number, required: true },
    total: { type: Number, required: true },
    estado: { type: String, enum: ['pendiente', 'completado'], default: 'pendiente' }
  },
  {
    timestamps: true 
  }
);
