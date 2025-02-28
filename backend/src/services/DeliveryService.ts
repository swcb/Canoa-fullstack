import { DeliveryRepository } from "../repositories/DeliveryRepositories";

export class DeliveryService {
    private deliveryRepository: DeliveryRepository;


    constructor() {
        this.deliveryRepository = new DeliveryRepository()
    }

    
    async createDelivery(customerName: string, address: string) {
        return this.deliveryRepository.create({customerName, address});
    }


    async getDeliveries() {
        return this.deliveryRepository.findAll();
    }
}