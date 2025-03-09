
import { AppDataSource } from "../config/database";
import { Repository } from "typeorm";
import { Endereco } from "../entities/Endereco";


export class EnderecoRepositories {
    private repository: Repository<Endereco>;


    constructor() {
        this.repository = AppDataSource.getRepository(Endereco);
    }


    async create(endereco: Partial<Endereco>): Promise<Endereco> {
        return this.repository.create(endereco);
    }


    async find(): Promise<Endereco[]> {
        return this.repository.find();
    }


    async findOne(id: string): Promise<Endereco | null> {
        return this.repository.findOne({ where: {id} });
    }


    async remove (endereco: Endereco): Promise<void> {
        this.repository.remove(endereco);
    }


    async save(endereco: Endereco): Promise<Endereco> {
        return this.repository.save(endereco);
    }

}