import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { PedidoService } from './pedido.service';
  import { PedidoDTO } from './pedido.dto'; 
  
  @Controller('pedido')
  export class PedidoController {
    constructor(private pedidoServicio: PedidoService) {}
  
    @Get()
    todos() {
      return this.pedidoServicio.todos();
    }
  
    @Get(':id_pedido')
    uno(@Param('id_pedido') id_pedido: string) {
      return this.pedidoServicio.uno(id_pedido);
    }
  
    @Post()
    insertar(@Body() pedido: PedidoDTO) { 
      return this.pedidoServicio.insertar(pedido);
    }
  
    @Put(':id_pedido')
    actualizar(@Param('id_pedido') id_pedido: string, @Body() pedido:PedidoDTO) { 
      return this.pedidoServicio.actualizar(id_pedido, pedido);
    }
  
    @Delete(':id_pedido')
    eliminar(@Param('id?pedido') id_pedido: string) {
      return this.pedidoServicio.eliminar(id_pedido);
    }
  }