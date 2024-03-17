import * as mongoose from 'mongoose';

export const PedidoSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  fecha: { type: Date, required: true },
  total: { type: Number, required: true },
  estado: { type: Number, required: true },
  metodo_pago: { type: String, required: true },
}, { timestamps: true });

export interface Pedido extends mongoose.Document {
  clienteId: mongoose.Types.ObjectId;
  fecha: Date;
  total: number;
  estado: number;
  metodo_pago: string;
}

export const PedidoModel = mongoose.model<Pedido>('Pedido', PedidoSchema);
