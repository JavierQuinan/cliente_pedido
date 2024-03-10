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
  import { ClienteDTO } from './cliente.dto'; 
  
  @Controller('cliente')
  export class ClienteController {
    constructor(private clienteServicio: ClienteService) {}
  
    @Get()
    todos() {
      return this.clienteServicio.todos();
    }
  
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.clienteServicio.uno(id);
    }
  
    @Post()
    insertar(@Body() cliente: ClienteDTO) { 
      return this.clienteServicio.insertar(cliente);
    }
  
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() cliente: ClienteDTO) { 
      return this.clienteServicio.actualizar(id, cliente);
    }
  
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.clienteServicio.eliminar(id);
    }
  }