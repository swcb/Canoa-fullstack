import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const router = Router();
const produtoController = new ProdutoController();


router.post("/", async (req, res) => {await produtoController.criarProduto(req, res)});
router.get("/", async (req, res) => {await produtoController.lerProduto(req, res)});
router.get("/all", async (req, res) => {await produtoController.lerTodosProduto(req, res)});
router.put("/", async (req, res) => {await produtoController.atualizarProduto(req, res)});
router.delete("/", async (req, res) => {await produtoController.excluirProduto(req, res)});


export default router;