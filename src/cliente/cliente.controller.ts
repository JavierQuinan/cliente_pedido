import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ClienteService } from './cliente.service';
  import { ClienteDTO } from './dto/cliente.dto'; 
  
  @Controller('api/v2/cliente')
  export class ClienteController {
    constructor(private clienteServicio: ClienteService) {}
    
    @Post()
    insertar(@Body() clienteDTO: ClienteDTO) { 
      return this.clienteServicio.insertar(clienteDTO);
    }
    @Get()
    todos() {
      return this.clienteServicio.todos();
    }
  
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.clienteServicio.uno(id);
    }
  
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() clienteDTO: ClienteDTO) { 
      return this.clienteServicio.actualizar(id, clienteDTO);
    }
  
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.clienteServicio.eliminar(id);
    }
  }