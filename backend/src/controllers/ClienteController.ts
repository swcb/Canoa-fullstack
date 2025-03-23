import { NextFunction, Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";
import { ClienteDTO } from "../dtos/ClienteDTO";


export class ClienteController {
    private clienteService: ClienteService;

    
    constructor() {
        this.clienteService = new ClienteService();
    }

    
    async criarCliente(req: Request, res:Response, next: NextFunction): Promise<void> {
        try {
            const clienteData: ClienteDTO = req.body;
            const cliente = await this.clienteService.criarCliente(clienteData);
            res.status(201).json(cliente);
        } catch(err) {
            next(err);
        }   
    }

    
    async lerTodosClientes(req: Request, res:Response, next: NextFunction): Promise<void>{
        try {
            const clientes = await this.clienteService.lerTodosClientes();
            res.status(200).json(clientes);
        } catch(err) {
            next(err);
        }  
    }


    async lerCliente(req: Request, res:Response, next: NextFunction): Promise<void>{
        try {
            const cliente = await this.clienteService.lerCliente(req.query.id as string);
            res.status(200).json(cliente);
        } catch(err) {
            next(err);
        }  
    }


    async atualizarCliente(req: Request, res:Response, next: NextFunction): Promise<void>{
        try {
            const clienteData: ClienteDTO = req.body;
            const cliente = await this.clienteService.atualizarCliente(req.query.id as string, clienteData);
            res.status(200).json(cliente);
        } catch(err) {
            next(err);
        } 
    }


    async excluirCliente(req: Request, res:Response, next: NextFunction): Promise<void>{
        try {
            await this.clienteService.excluirCliente(req.query.id as string);
            res.status(204).send();
        } catch(err) {
            next(err);
        } 
    }
}

