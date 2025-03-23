import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";
import { validateId } from "../middlewares/validateId";
import { validateDTO } from "../middlewares/validateDTO";
import { ClienteDTO } from "../dtos/ClienteDTO";

const router = Router();
const clienteController = new ClienteController();


router.post("/", validateDTO(ClienteDTO), (req, res, next) => {return clienteController.criarCliente(req, res, next)})
router.put("/", validateId, validateDTO(ClienteDTO), (req, res, next) => {return clienteController.atualizarCliente(req, res, next)});
router.get("/", validateId, (req, res, next) => {return clienteController.lerCliente(req, res, next)});
router.get("/all", (req, res, next) => {return clienteController.lerTodosClientes(req, res, next)});
router.delete("/", validateId, (req, res, next) => {return clienteController.excluirCliente(req, res, next)});


export default router;