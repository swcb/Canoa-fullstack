import { Request, Response } from "express";
import { PedidoService } from "../services/PedidoService";
import { PedidoDTO } from "../dtos/PedidoDTO";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";


export class PedidoController {
    private pedidoService: PedidoService;


    constructor() {
        this.pedidoService = new PedidoService();
    }


    async criarPedido(req: Request, res:Response): Promise<Response> {
        const pedidoDTO = plainToClass(PedidoDTO, req.body);
        const erros = await validate(pedidoDTO);
        if(erros.length > 0){
            return res.status(400).json({ errors: erros });
        }
        
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

        const pedidoDTO = plainToClass(PedidoDTO, req.body);
        const erros = await validate(pedidoDTO);
        if(erros.length > 0){
            return res.status(400).json({ errors: erros });
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