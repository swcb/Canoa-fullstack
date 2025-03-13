import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";
import { ProdutoDTO } from "../dtos/ProdutoDTO";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";


export class ProdutoController{
    private produtoService: ProdutoService;


    constructor() {
        this.produtoService = new ProdutoService();
    }


    async criarProduto(req: Request, res:Response): Promise<Response> {
        const produtoDTO = plainToClass(ProdutoDTO, req.body);
        const erros = await validate(produtoDTO);
        if(erros.length > 0){
            return res.status(400).json({ errors: erros });
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
            return res.status(400).json({ message: "ID não fornecido" });
        }

        const produto = await this.produtoService.lerProduto(id);
        return res.status(200).json(produto);
    }


    async atualizarProduto(req: Request, res:Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        const produtoDTO = plainToClass(ProdutoDTO, req.body);
        const erros = await validate(produtoDTO);
        if(erros.length > 0){
            return res.status(400).json({ errors: erros });
        }

        const produtoData: ProdutoDTO = req.body;
        const produto = await this.produtoService.atualizarProduto(id, produtoData);
        return res.status(200).json(produto);
    }


    async excluirProduto(req: Request, res:Response): Promise<Response> {
        const id = req.query.id as string | undefined;
        
        if(!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        await this.produtoService.excluirProduto(id);
        return res.status(204).send();
    }
}