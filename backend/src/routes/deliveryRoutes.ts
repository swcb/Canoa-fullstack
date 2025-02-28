import { Router } from "express";
import { DeliveryController } from "../controllers/DeliveryController";

const router = Router();
const deliveryController = new DeliveryController();


router.post("/", async (req, res, next) => {await deliveryController.create(req, res, next)});
router.get("/", async (req, res, next) => {await deliveryController.getAll(req, res, next)});


export default router;