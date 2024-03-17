import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';
import { RelacionRealizaModule } from './relacion_realiza/relacion_realiza.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development', 
      isGlobal: true, 
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/cliente_pedido'),
    ClienteModule,
    PedidoModule,
    RelacionRealizaModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
