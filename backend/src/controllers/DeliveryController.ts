import { NextFunction, Request, Response } from "express";
import { DeliveryService } from "../services/DeliveryService";

const deliveryService = new DeliveryService();

export class DeliveryController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { customerName, address } = req.body;
            const delivery = await deliveryService.createDelivery(customerName, address);
            return res.json(delivery);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const deliveries = await deliveryService.getDeliveries();
            return res.json(deliveries);
        } catch (error) {
            next(error);
        }
    }
}