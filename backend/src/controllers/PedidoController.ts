import { Request, Response } from "express";
import { PedidoService } from "../services/PedidoService";
import { Cliente } from "../entities/Cliente";
import { Produto } from "../entities/Produto";


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


export class PedidoController {
    private pedidoService: PedidoService;


    constructor() {
        this.pedidoService = new PedidoService();
    }


    async criarPedido(req: Request, res:Response): Promise<Response> {
        const pedidoData: PedidoDTO = req.body;
        const pedido = await this.pedidoService.criarPedido(pedidoData);
        return res.status(201).json(pedido);
    }


    async lerTodosPedidos(req: Request, res:Response): Promise<Response> {
        const pedidos = await this.pedidoService.lerTodosPedidos();
        return res.status(200).json(pedidos);
    }


    async lerPedido(req: Request, res:Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        } 

        const pedido = await this.pedidoService.lerPedido(id);
        return res.status(200).json(pedido);
    }


    async atualizarPedido(req: Request, res:Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        const pedidoData: PedidoDTO = req.body;
        const pedido = await this.pedidoService.atualizarPedido(id, pedidoData);
        return res.status(200).json(pedido);
    }


    async excluirPedido(req: Request, res:Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }
        
        await this.pedidoService.excluirPedido(id);
        return res.status(204).send();
    }
}