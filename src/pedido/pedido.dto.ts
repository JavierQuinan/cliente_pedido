import {
    IsNotEmpty,
    IsNumber,
    IsString,
    IsDateString,
  } from 'class-validator';
  
  export class PedidoDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    id_pedido: string;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsDateString({}, { message: 'Formato de fecha inválido' })
    fecha: string; 
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsNumber({}, { message: 'Se necesita un número' })
    total: number; 
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsNumber({}, { message: 'Se necesita un número' })
    estado: number;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    metodo_pago: string;
  }
  