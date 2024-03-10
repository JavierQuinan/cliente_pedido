import { Module } from '@nestjs/common';
import { RelacionRealizaController } from './relacion_realiza.controller';
import { RelacionRealizaService } from './relacion_realiza.service';

@Module({
  controllers: [RelacionRealizaController],
  providers: [RelacionRealizaService]
})
export class RelacionRealizaModule {}
