import {
    IsNotEmpty,
    IsNumber,
    IsString,
    IsEmail, 
  } from 'class-validator';
  
  export class ClienteDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    id: string;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    nombre: string;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsEmail({}, { message: 'Formato de correo electrónico inválido' }) 
    email: string;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsNumber({}, { message: 'Se necesita un número' }) 
    telefono: number;
  
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    direccion: string;
  }