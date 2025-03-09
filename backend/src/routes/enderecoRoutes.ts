import { Router } from "express";
import { EnderecoController } from "../controllers/EnderecoController";

const router = Router();
const enderecoController = new EnderecoController();


router.post("/", async (req, res) => {await enderecoController.criarEndereco(req, res)});
router.get("/", async (req, res) => {await enderecoController.lerEndereco(req, res)});
router.get("/all", async (req, res) => {await enderecoController.lerTodosEnderecos(req, res)});
router.put("/", async (req, res) => {await enderecoController.atualizarEndereco(req, res)});
router.delete("/", async (req, res) => {await enderecoController.excluirEndereco(req, res)});


export default router;