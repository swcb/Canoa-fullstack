import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";
import { ProdutoDTO } from "../dtos/ProdutoDTO";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ValidationError } from "../errors/ValidationError";


export class ProdutoController{
    private produtoService: ProdutoService;


    constructor() {
        this.produtoService = new ProdutoService();
    }


    async criarProduto(req: Request, res:Response): Promise<Response> {
        const produtoDTO = plainToClass(ProdutoDTO, req.body);
        const erros = await validate(produtoDTO);
        if(erros.length > 0){
            throw new ValidationError('Dados de Produto inválidos');
        }

        const produtoData: ProdutoDTO = req.body;
        const produto = await this.produtoService.criarProduto(produtoData);
        return res.status(201).json(produto);
    }


    async lerTodosProduto(req: Request, res:Response): Promise<Response> {
        const produtos = await this.produtoService.lerTodosProdutos();
        return res.status(200).json(produtos);
    }


    async lerProduto(req: Request, res:Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            throw new ValidationError('ID não fornecido');
        }

        const produto = await this.produtoService.lerProduto(id);
        return res.status(200).json(produto);
    }


    async atualizarProduto(req: Request, res:Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            throw new ValidationError('ID não fornecido');
        }

        const produtoDTO = plainToClass(ProdutoDTO, req.body);
        const erros = await validate(produtoDTO);
        if(erros.length > 0){
            throw new ValidationError('Dados de Cliente inválidos');
        }

        const produtoData: ProdutoDTO = req.body;
        const produto = await this.produtoService.atualizarProduto(id, produtoData);
        return res.status(200).json(produto);
    }


    async excluirProduto(req: Request, res:Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            throw new ValidationError('ID não fornecido');
        }

        await this.produtoService.excluirProduto(id);
        return res.status(204).send();
    }
}