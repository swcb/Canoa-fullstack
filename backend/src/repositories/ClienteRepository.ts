import { AppDataSource } from "../config/database";
import { Repository } from "typeorm";
import { Cliente } from "../entities/Cliente";



export class ClienteRepository {
    private repository: Repository<Cliente>;


    constructor() {
        this.repository = AppDataSource.getRepository(Cliente);
    }


    async create(cliente: Partial<Cliente>): Promise<Cliente> {
        return this.repository.create(cliente);
    }


    async find(): Promise<Cliente[]> {
        return this.repository.find();
    }


    async findOne(id: string): Promise<Cliente | null> {
        return this.repository.findOne({ where: {id} });
    }


    async remove(cliente: Cliente): Promise<void> {
        this.repository.remove(cliente);
    }


    async save(cliente: Cliente): Promise<Cliente> {
        return this.repository.save(cliente);
    }
}