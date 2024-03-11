import { Module } from '@nestjs/common';
import { ClienteModule } from '../cliente/cliente.module'; // Ruta relativa al módulo del cliente
import { PedidoModule } from '../pedido/pedido.module'; // Ruta relativa al módulo del pedido
import { RelacionRealizaController } from './relacion_realiza.controller';
// Importa y provee el servicio si es necesario

@Module({
  imports: [ClienteModule, PedidoModule],
  controllers: [RelacionRealizaController],
  // providers: [RelacionRealizaService], // Si tienes lógica específica en el servicio
})
export class RelacionRealizaModule {}
