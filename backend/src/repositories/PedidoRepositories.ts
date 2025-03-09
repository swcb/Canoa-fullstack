import { AppDataSource } from "../config/database";
import { Repository } from "typeorm";
import { Pedido } from "../entities/Pedido";


export class PedidoRepositories {
    private repository: Repository<Pedido>;


    constructor() {
        this.repository = AppDataSource.getRepository(Pedido);
    }


    async create(pedido: Partial<Pedido>):Promise<Pedido> {
        return this.repository.create(pedido);
    }


    async find():Promise<Pedido[]> {
        return this.repository.find();
    }


    async findOne(id: string):Promise<Pedido | null> {
        return this.repository.findOne({ where: {id} });
    }


    async remove(pedido: Pedido):Promise<void> {
        this.repository.remove(pedido);
    }


    async save(pedido: Pedido):Promise<Pedido> {
        return this.repository.save(pedido);
    }
}