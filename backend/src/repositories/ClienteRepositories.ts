import { AppDataSource } from "../config/database";
import { Repository } from "typeorm";
import { Cliente } from "../entities/Cliente";
import { ClienteDTO } from "../dtos/ClienteDTO";



export class ClienteRepositories {
    private repository: Repository<Cliente>;


    constructor() {
        this.repository = AppDataSource.getRepository(Cliente);
    }


    async create(cliente: ClienteDTO): Promise<Cliente> {
        return this.repository.create(cliente);
    }


    async find(): Promise<Cliente[]> {
        return this.repository.find({ relations: ["endereco", "pedidos"] });
    }


    async findOne(id: string): Promise<Cliente | null> {
        return this.repository.findOne({ 
            where: {id},
            relations: ["endereco", "pedidos"]
         });
    }


    async remove(cliente: Cliente): Promise<void> {
        this.repository.remove(cliente);
    }


    async save(cliente: Cliente): Promise<Cliente> {
        return this.repository.save(cliente);
    }
}