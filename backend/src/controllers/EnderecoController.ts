import { Request, Response } from "express";
import { EnderecoService } from "../services/EnderecoService";
import { EnderecoDTO } from "../dtos/EnderecoDTO";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";


export class EnderecoController {
    private enderecoService: EnderecoService;


    constructor() {
        this.enderecoService = new EnderecoService();
    }


    async criarEndereco(req: Request, res: Response): Promise<Response> {
        const enderecoDTO = plainToClass(EnderecoDTO, req.body);
        const erros = await validate(enderecoDTO);
        if(erros.length > 0){
            return res.status(400).json({ errors: erros });
        }

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

        const enderecoDTO = plainToClass(EnderecoDTO, req.body);
        const erros = await validate(enderecoDTO);
        if(erros.length > 0){
            return res.status(400).json({ errors: erros });
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