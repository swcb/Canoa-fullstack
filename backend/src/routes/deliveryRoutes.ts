import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req:Request, res:Response) => {res.json({ message: 'Lista de entregas'})});
router.post('/', (req:Request, res:Response) => {res.json({ message: 'Criar uma entrega'})});

export default router;