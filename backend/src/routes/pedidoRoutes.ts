import { Router } from "express";
import { PedidoController } from "../controllers/PedidoController";

const router = Router();
const pedidoController = new PedidoController();


router.post("/", async (req, res) => {await pedidoController.criarPedido(req, res)});
router.get("/", async (req, res) => {await pedidoController.lerPedido(req, res)});
router.get("/all", async (req, res) => {await pedidoController.lerTodosPedidos(req, res)});
router.put("/", async (req, res) => {await pedidoController.atualizarPedido(req, res)});
router.delete("/", async (req, res) => {await pedidoController.excluirPedido(req, res)});


export default router;