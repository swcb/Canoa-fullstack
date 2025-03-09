import { PedidoRepositories } from "../repositories/PedidoRepositories";
import { Pedido } from "../entities/Pedido";
import { Produto } from "../entities/Produto";
import { Cliente } from "../entities/Cliente";


interface PedidoDTO {
    dataCriacao: Date;
    dataLimiteEntrega?: Date;
    prazoEntrega?:number;
    entregueEm?: Date;
    status?: string;
    pago?: boolean;
    cliente?: Cliente;
    itens?: Produto[];
}

export class PedidoService {
    private pedidoRepositories: PedidoRepositories;

    
    constructor() {
        this.pedidoRepositories = new PedidoRepositories();
    }


    async criarPedido(pedidoData: PedidoDTO): Promise<Pedido> {
        const pedido = await this.pedidoRepositories.create(pedidoData);
        return this.pedidoRepositories.save(pedido);
    }


    async lerTodosPedidos(): Promise<Pedido[]> {
        return this.pedidoRepositories.find();
    }


    async lerPedido(id: string): Promise<Pedido | null> {
        return this.pedidoRepositories.findOne(id);
    }


    async atualizarPedido(id: string, pedidoData: PedidoDTO): Promise<Pedido> {
        const pedido = await this.pedidoRepositories.findOne(id);
        if(!pedido){
            throw new Error('Pedido não encontrado');
        }
        Object.assign(pedido, pedidoData);
        return this.pedidoRepositories.save(pedido);
    }


    async excluirPedido(id: string): Promise<void> {
        const pedido = await this.pedidoRepositories.findOne(id);
        if(!pedido){
            throw new Error('Pedido não encontrado');
        }
        await this.pedidoRepositories.remove(pedido);
    }
}