import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteModule } from '../cliente/cliente.module'; 
import { PedidoModule } from '../pedido/pedido.module'; 
import { RelacionRealizaController } from './relacion_realiza.controller';
import { RelacionRealizaService } from './relacion_realiza.service';
import { RelacionRealizaSchema } from './schema/relacion_realiza.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'RelacionRealiza', schema: RelacionRealizaSchema }]),
    ClienteModule,
    PedidoModule, 
  ],
  controllers: [RelacionRealizaController],
  providers: [RelacionRealizaService],
})
export class RelacionRealizaModule {}
