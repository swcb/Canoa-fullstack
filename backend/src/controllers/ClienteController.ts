import { Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";
import { Pedido } from "../entities/Pedido";
import { Endereco } from "../entities/Endereco";
//import { ClienteDTO } from "src/dtos/ClienteDTO";
//import { validate } from "class-validator/types";
//import { plainToClass } from "class-transformer/types";


interface ClienteDTO {
    nome: string;
    email?: string;
    telefone:string;
    endereco?: Endereco;
    pedidos?: Pedido[];
}


export class ClienteController {
    private clienteService: ClienteService;

    
    constructor() {
        this.clienteService = new ClienteService();
    }

    
    async criarCliente(req: Request, res:Response): Promise<Response> {
        const clienteData: ClienteDTO = req.body;
        const cliente = await this.clienteService.criarCliente(clienteData);
        return res.status(201).json(cliente);
    }

    
    async lerTodosClientes(req: Request, res:Response): Promise<Response>{
        const clientes = await this.clienteService.lerTodosClientes();
        return res.status(200).json(clientes)
    }


    async lerCliente(req: Request, res:Response): Promise<Response>{
        const id = req.query.id as string | undefined;
        
        if(!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        const cliente = await this.clienteService.lerCliente(id);
        return res.status(200).json(cliente);
    }


    async atualizarCliente(req: Request, res:Response): Promise<Response>{
        const id = req.query.id as string | undefined;
        
        if (!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        const clienteData: ClienteDTO = req.body;
        const cliente = await this.clienteService.atualizarCliente(id, clienteData);
        return res.status(200).json(cliente);
    }


    async excluirCliente(req: Request, res:Response): Promise<Response>{
        const id = req.query.id as string | undefined;
        
        if (!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        await this.clienteService.excluirCliente(id);
        return res.status(204).send();
    }
}