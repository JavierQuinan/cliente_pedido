import { Injectable } from '@nestjs/common';
import { ClienteService } from '../cliente/cliente.service'; 
import { PedidoService } from '../pedido/pedido.service'; 
import { PedidoDTO } from '../pedido/dto/pedido.dto'; // Corregido
import { ClienteDTO } from '../cliente/dto/cliente.dto'; // Corregido

@Injectable()
export class RelacionRealizaService {
  constructor(
    private readonly clienteService: ClienteService,
    private readonly pedidoService: PedidoService,
  ) {}

  async obtenerPedidosDeCliente(clienteId: string) {
    try {
      const cliente = await this.clienteService.uno(clienteId);
      if (!cliente) {
        throw new Error('Cliente no encontrado');
      }

      const pedidos = await this.pedidoService.findAllPedidosByClienteId(clienteId); // Corregido
      return pedidos;
    } catch (error) {
      throw new Error(`Error al obtener los pedidos del cliente: ${error.message}`);
    }
  }
  
  async crearPedidoParaCliente(clienteId: string, pedidoDTO: PedidoDTO) {
    try {
      const cliente = await this.clienteService.uno(clienteId); 
      if (!cliente) {
        throw new Error('Cliente no encontrado');
      }
      const nuevoPedido = await this.pedidoService.insertar(pedidoDTO); // Corregido
      nuevoPedido.clienteId = clienteId;
      return nuevoPedido;
    } catch (error) {
      throw new Error(`Error al crear el pedido para el cliente: ${error.message}`);
    }
  }
  
  async eliminarPedidosDeCliente(clienteId: string) {
    try {
      const cliente = await this.clienteService.uno(clienteId); 
      if (!cliente) {
        throw new Error('Cliente no encontrado');
      }
      await this.pedidoService.eliminar(clienteId); // Corregido
      return 'Pedidos eliminados correctamente';
    } catch (error) {
      throw new Error(`Error al eliminar los pedidos del cliente: ${error.message}`);
    }
  }
  
  async actualizarClienteEnPedidos(clienteId: string, clienteActualizar: ClienteDTO) {
    try {
      const cliente = await this.clienteService.uno(clienteId); 
      if (!cliente) {
        throw new Error('Cliente no encontrado');
      }
      await this.pedidoService.actualizarClienteEnPedidos(clienteId, clienteActualizar);
      return 'Información del cliente actualizada en los pedidos';
    } catch (error) {
      throw new Error(`Error al actualizar la información del cliente en los pedidos: ${error.message}`);
    }
  }
}
