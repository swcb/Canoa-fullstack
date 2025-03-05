import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

const router = Router();
const clienteController = new ClienteController();


router.post("/", async (req, res) => {await clienteController.criarCliente(req, res)});
router.get("/", async (req, res) => {await clienteController.lerCliente(req, res)});
router.get("/all", async (req, res) => {await clienteController.lerTodosClientes(req, res)});
router.put("/", async (req, res) => {await clienteController.atualizarCliente(req, res)});
router.delete("/", async (req, res) => {await clienteController.excluirCliente(req, res)});


export default router;