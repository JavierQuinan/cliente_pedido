import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';
import { RelacionRealizaModule } from './relacion_realiza/relacion_realiza.module';

@Module({
  imports: [ClienteModule, PedidoModule, RelacionRealizaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
