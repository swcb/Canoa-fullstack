import { Request, Response } from "express";
import { EnderecoService } from "../services/EnderecoService";
import { Cliente } from "../entities/Cliente";


interface EnderecoDTO {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento?: string;
    referencia: string;
    clientes?: Cliente[];
}


export class EnderecoController {
    private enderecoService: EnderecoService;


    constructor() {
        this.enderecoService = new EnderecoService();
    }


    async criarEndereco(req: Request, res: Response): Promise<Response> {
        const enderecoData: EnderecoDTO = req.body
        const endereco = await this.enderecoService.criarEndereco(enderecoData);
        return res.status(201).json(endereco);
    }


    async lerTodosEnderecos(req: Request, res: Response): Promise<Response> {
        const enderecos = await this.enderecoService.lerTodosEnderecos();
        return res.status(200).json(enderecos);
    }


    async lerEndereco(req: Request, res: Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        const endereco = await this.enderecoService.LerEndereco(id);
        return res.status(200).json(endereco);
    }


    async atualizarEndereco(req: Request, res: Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        const enderecoData: EnderecoDTO = req.body
        const endereco = await this.enderecoService.atualizarEndereco(id, enderecoData)
        return res.status(200).json(endereco);
    }


    async excluirEndereco(req: Request, res: Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        await this.enderecoService.excluirEndereco(id);
        return res.status(204).send();
    }
}