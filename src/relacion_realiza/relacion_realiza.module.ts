import { Module } from '@nestjs/common';
import { ClienteModule } from '../cliente/cliente.module'; 
import { PedidoModule } from '../pedido/pedido.module';
import { RelacionRealizaController } from './relacion_realiza.controller';


@Module({
  imports: [ClienteModule, PedidoModule],
  controllers: [RelacionRealizaController],

})
export class RelacionRealizaModule {}
