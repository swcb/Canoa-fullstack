import { AppDataSource } from "../config/database";
import { Repository } from "typeorm";
import { Produto } from "../entities/Produto";

export class ProdutoRepositories {
    private repository: Repository<Produto>;

    
    constructor() {
        this.repository = AppDataSource.getRepository(Produto);
    }


    async create(produto: Partial<Produto>): Promise<Produto> {
        return this.repository.create(produto);
    }


    async find(): Promise<Produto[]> {
        return this.repository.find();
    }


    async findOne(id: string): Promise<Produto | null> {
        return this.repository.findOne({ where: {id}});
    }


    async remove(produto: Produto): Promise<void> {
        this.repository.remove(produto);
    }


    async save(produto: Produto): Promise<Produto> {
        return this.repository.save(produto);
    }
}