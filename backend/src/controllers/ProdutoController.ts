import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";
import { Pedido } from "../entities/Pedido";


interface ProdutoDTO {
    nome: string;
    descricao?: string;
    preco?: string;
    categoria?: string;
    subcategoria?: string;
    pedidos?: Pedido[];
}


export class ProdutoController{
    private produtoService: ProdutoService;


    constructor() {
        this.produtoService = new ProdutoService();
    }


    async criarProduto(req: Request, res:Response): Promise<Response> {
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