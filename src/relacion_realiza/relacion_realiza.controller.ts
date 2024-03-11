import { Controller, Get, Param } from '@nestjs/common';
import { ClienteService } from '../cliente/cliente.service';

@Controller('clientes')
export class RelacionRealizaController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get(':id/pedidos')
  getPedidosByClienteId(@Param('id') clienteId: string) {
    return this.clienteService.findAllPedidosByClienteId(clienteId);
  }
}

