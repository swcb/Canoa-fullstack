import { AppDataSource } from "../config/database";
import { Repository } from "typeorm";
import { Delivery } from "../entities/Delivery";

export class DeliveryRepository {
    private repository: Repository<Delivery>;


    constructor() {
        this.repository = AppDataSource.getRepository(Delivery);
    }


    async create(delivery: Partial<Delivery>) {
        const newDelivery = this.repository.create(delivery);
        return this.repository.save(newDelivery);
    }


    async findAll() {
        return this.repository.find();
    }
}