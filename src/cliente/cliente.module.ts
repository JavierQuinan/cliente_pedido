import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteService } from './cliente.service';
import { ClienteSchema } from './schema/cliente.schema'; 
import { PedidoModel } from '../pedido/schema/pedido.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'Cliente',
        useFactory: async () => ClienteSchema,
      },
      {
        name: 'Pedido',
        useFactory: async () => PedidoModel.schema,
      },
    ]),
  ],
  providers: [ClienteService],
  exports: [ClienteService], 
})
export class ClienteModule {}
