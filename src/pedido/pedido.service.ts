import { Injectable } from '@nestjs/common';
import { IPedido } from './pedido.interfaces';
import { v4 as uuidV4 } from 'uuid';
import { PedidoDTO } from './dto/pedido.dto';
import { ClienteDTO } from 'src/cliente/dto/cliente.dto';

@Injectable()
export class PedidoService {
  findAllPedidosByClienteId(_clienteId: string) {
    throw new Error('Method not implemented.');
  }
  actualizarClienteEnPedidos(_clienteId: string, _clienteActualizar: ClienteDTO) {
    throw new Error('Method not implemented.');
  }
  pedidos: IPedido[] = [];

  todos() {
    return this.pedidos;
  }

  uno(id: string) {
    return this.pedidos.find((pedido) => pedido.id_pedido === id);
  }

  insertar(pedidoDTO: PedidoDTO) {
    const nuevoPedido: IPedido = {
      id_pedido: uuidV4(),
      ...pedidoDTO,
      clienteId: ''
    };
    this.pedidos.push(nuevoPedido);
    return nuevoPedido;
  }

  actualizar(id: string, pedidoActualizar: PedidoDTO) {
    const index = this.pedidos.findIndex((pedido) => pedido.id_pedido === id);
    if (index !== -1) {
      const pedidoActualizado = { ...this.pedidos[index], ...pedidoActualizar };
      this.pedidos[index] = pedidoActualizado;
      return pedidoActualizado;
    } else {
      throw new Error('Pedido no encontrado');
    }
  }

  eliminar(id: string) {
    const pedidoIndex = this.pedidos.findIndex((pedido) => pedido.id_pedido === id);
    if (pedidoIndex !== -1) {
      this.pedidos.splice(pedidoIndex, 1);
      return 'Pedido Eliminado';
    } else {
      throw new Error('Pedido no encontrado');
    }
  }
}
