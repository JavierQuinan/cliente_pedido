import { Injectable } from '@nestjs/common';
import { IPedido } from './pedido.interfaces';
import { v4 as uuidV4 } from 'uuid';
import { PedidoDTO } from './pedido.dto';

@Injectable()
export class PedidoService {
  pedidos: IPedido[] = [];

  todos() {
    return this.pedidos;
  }

  uno(id: string) {
    return this.pedidos.find((pedido) => pedido.id === id);
  }

  insertar(pedidoDTO: PedidoDTO) {
    const nuevoPedido: IPedido = {
        id: uuidV4(),
        ...pedidoDTO,
    };
    this.pedidos.push(nuevoPedido);
    return nuevoPedido;
  }

  actualizar(id: string, pedidoActualizar: PedidoDTO) {
    const index = this.pedidos.findIndex((pedido) => pedido.id === id);
    if (index !== -1) {
      const pedidoActualizado = { ...this.pedidos[index], ...pedidoActualizar };
      this.pedidos[index] = pedidoActualizado;
      return pedidoActualizado;
    } else {
      throw new Error('Pedido no encontrado');
    }
  }

  eliminar(id: string) {
    const pedidoIndex = this.pedidos.findIndex((pedido) => pedido.id === id);
    if (pedidoIndex !== -1) {
      this.pedidos.splice(pedidoIndex, 1);
      return 'Pedido Eliminado';
    } else {
      throw new Error('Pedido no encontrado');
    }
  }
}
