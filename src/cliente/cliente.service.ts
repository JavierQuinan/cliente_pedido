// cliente.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClienteDTO } from './dto/cliente.dto';
import { ICliente } from './cliente.interfaces';
import { IPedido } from 'src/pedido/pedido.interfaces';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel('Cliente') private readonly clienteModel: Model<ICliente>,
    @InjectModel('Pedido') private readonly pedidoModel: Model<IPedido> 
  ) {}

  async todos(): Promise<ICliente[]> {
    return await this.clienteModel.find().exec();
  }

  async uno(id: string): Promise<ICliente> {
    return await this.clienteModel.findById(id).exec();
  }

  async insertar(clienteDTO: ClienteDTO): Promise<ICliente> {
    const nuevoCliente = new this.clienteModel(clienteDTO);
    return await nuevoCliente.save();
  }

  async actualizar(id: string, clienteActualizar: ClienteDTO): Promise<ICliente> {
    return await this.clienteModel.findByIdAndUpdate(id, clienteActualizar, { new: true }).exec();
  }

  async eliminar(id: string): Promise<any> {
    return await this.clienteModel.findByIdAndDelete(id).exec();
  }

  async findAllPedidosByClienteId(clienteId: string): Promise<IPedido[]> {
    return await this.pedidoModel.find({ clienteId }).exec();
  }
}
