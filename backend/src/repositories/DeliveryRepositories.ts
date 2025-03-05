import { AppDataSource } from "../config/database";
import { DataSource, Repository } from "typeorm";
import { Delivery } from "../entities/Delivery";

export class DeliveryRepository {
    private repository: Repository<Delivery>;


    constructor(dataSource?: DataSource) {
        this.repository = (dataSource || AppDataSource).getRepository(Delivery);
    }


    async create(delivery: Partial<Delivery>) {
        const newDelivery = this.repository.create(delivery);
        return this.repository.save(newDelivery);
    }


    async findAll() {
        return this.repository.find();
    }
    
    async findOneBy(delivery: Partial<Delivery>) {
        return this.repository.findOneBy(delivery);
    }
}