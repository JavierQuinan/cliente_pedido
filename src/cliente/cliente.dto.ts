import {
    IsNotEmpty,
    IsNumber,
    IsString,
    IsEmail, // Agregado para validar el formato de correo electrónico
  } from 'class-validator';
  
  export class ClienteDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    id: string;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    nombre: string;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsEmail({}, { message: 'Formato de correo electrónico inválido' }) // Validación del formato de correo electrónico
    email: string;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsNumber({}, { message: 'Se necesita un número' }) // Se ajustó para validar como número en lugar de string
    telefono: number;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    direccion: string;
  }