import { AppDataSource } from "../config/database";
import { Repository } from "typeorm";
import { Produto } from "../entities/Produto";
import { ProdutoDTO } from "../dtos/ProdutoDTO";

export class ProdutoRepositories {
    private repository: Repository<Produto>;

    
    constructor() {
        this.repository = AppDataSource.getRepository(Produto);
    }


    async create(produto: ProdutoDTO): Promise<Produto> {
        return this.repository.create(produto);
    }


    async find(): Promise<Produto[]> {
        return this.repository.find({ relations: ["pedidos"] });
    }


    async findOne(id: string): Promise<Produto | null> {
        return this.repository.findOne({ 
            where: {id},
            relations: ["pedidos"]
        });
    }


    async remove(produto: Produto): Promise<void> {
        this.repository.remove(produto);
    }


    async save(produto: Produto): Promise<Produto> {
        return this.repository.save(produto);
    }
}