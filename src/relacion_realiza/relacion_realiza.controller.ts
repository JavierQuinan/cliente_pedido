import { Controller, Get, Param } from '@nestjs/common';
import { ClienteService } from '../cliente/cliente.service'; // Ruta relativa al archivo del servicio

@Controller('clientes')
export class RelacionRealizaController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get(':id/pedidos') // Corregido el parámetro en el decorador @Get
  getPedidosByClienteId(@Param('id') clienteId: string) {
    return this.clienteService.findAllPedidosByClienteId(clienteId);
  }
}

