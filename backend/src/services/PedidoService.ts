import { PedidoRepositories } from "../repositories/PedidoRepositories";
import { Pedido } from "../entities/Pedido";
import { PedidoDTO } from "../dtos/PedidoDTO";


export class PedidoService {
    private pedidoRepositories: PedidoRepositories;

    
    constructor() {
        this.pedidoRepositories = new PedidoRepositories();
    }


    async criarPedido(pedidoData: PedidoDTO): Promise<Pedido> {
        pedidoData.dataCriacao = new Date(Date.now());
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