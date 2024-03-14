import { IsNotEmpty, IsString } from 'class-validator';

export class RelacionRealizaDTO {
  @IsNotEmpty({ message: 'El ID del cliente es requerido' })
  @IsString({ message: 'Se necesita un texto para el ID del cliente' })
  clienteId: string;

  @IsNotEmpty({ message: 'El ID del pedido es requerido' })
  @IsString({ message: 'Se necesita un texto para el ID del pedido' })
  pedidoId: string;
}
