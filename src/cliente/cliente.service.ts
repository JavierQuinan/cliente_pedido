import { Injectable } from '@nestjs/common';
import { ICliente } from './cliente.interfaces';
import { v4 as uuidV4 } from 'uuid';
import { ClienteDTO } from './cliente.dto';
import { IPedido } from 'src/pedido/pedido.interfaces';
import { PedidoService } from 'src/pedido/pedido.service';

@Injectable()
export class ClienteService {
  [x: string]: any;
  constructor(private readonly pedidoService: PedidoService) {} // Inyecta el servicio de Pedido
  clientes: ICliente[] = [];

  todos() {
    return this.clientes;
  }

  uno(id: string) {
    return this.clientes.find((cliente) => cliente.id === id);
  }

  insertar(cliente: ClienteDTO) {
    const nuevoCliente: ICliente = {
        id: uuidV4(),
        ...cliente,
        nombres: '',
        Telefono: 0
    };
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  actualizar(id: string, clienteActualizar: ClienteDTO) {
    const index = this.clientes.findIndex((cliente) => cliente.id === id);
    if (index !== -1) {
      const clienteActualizado: ICliente = {
          id,
          ...clienteActualizar,
          nombres: '',
          Telefono: 0
      };
      this.clientes[index] = clienteActualizado;
      return clienteActualizado;
    } else {
      throw new Error('Cliente no encontrado');
    }
  }

  eliminar(id: string) {
    const clienteIndex = this.clientes.findIndex((cliente) => cliente.id === id);
    if (clienteIndex !== -1) {
      this.clientes.splice(clienteIndex, 1);
      return 'Cliente Eliminado';
    } else {
      throw new Error('Cliente no encontrado');
    }
  }

  async findAllPedidosByClienteId(clienteId: string): Promise<IPedido[]> {
    // Llama al método findAll del servicio de Pedido pasando el clienteId
    return await this.pedidoService.findAll({ clienteId });
  }
}
