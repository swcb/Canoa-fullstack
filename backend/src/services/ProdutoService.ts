import { ProdutoRepositories } from "../repositories/ProdutoRepositories";
import { Produto } from "../entities/Produto";
import { Pedido } from "../entities/Pedido";


interface ProdutoDTO {
    nome: string;
    descricao?: string;
    preco?: string;
    categoria?: string;
    subcategoria?: string;
    pedidos?: Pedido[];
}


export class ProdutoService {
    private produtoRepositories: ProdutoRepositories;


    constructor() {
        this.produtoRepositories = new ProdutoRepositories();
    }


    async criarProduto(produtoData: ProdutoDTO): Promise<Produto>{
        const produto = await this.produtoRepositories.create(produtoData);
        return this.produtoRepositories.save(produto);
    }


    async lerTodosProdutos(): Promise<Produto[]>{
        return this.produtoRepositories.find();
    }


    async lerProduto(id: string): Promise<Produto | null>{
        return this.produtoRepositories.findOne(id);
    }


    async atualizarProduto(id: string, produtoData: ProdutoDTO): Promise<Produto>{
        const produto = await this.produtoRepositories.findOne(id);
        if(!produto){
            throw new Error('Produto não encontrado');
        }
        Object.assign(produto, produtoData);
        return this.produtoRepositories.save(produto);
    }


    async excluirProduto(id: string): Promise<void>{
        const produto = await this.produtoRepositories.findOne(id);
        if(!produto){
            throw new Error('Produto não encontrado');
        }
        await this.produtoRepositories.remove(produto);
    }
}