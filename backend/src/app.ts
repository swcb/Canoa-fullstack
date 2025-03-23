import express from "express";
import "express-async-errors";

import clienteRoutes from "./routes/clienteRoutes";
import produtoRoutes from "./routes/produtoRoutes";
import pedidoRoutes from "./routes/pedidoRoutes";
import enderecoRoutes from "./routes/enderecoRoutes";

import notFoundMiddleware from "./middlewares/NotFoundMiddleware";
import ErrorHandler from "./middlewares/ErrorHandler"; 


const app = express();
app.use(express.json());


app.use("/clientes", clienteRoutes);
app.use("/produtos", produtoRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/enderecos", enderecoRoutes);


app.use(notFoundMiddleware);

app.use((ErrorHandler as unknown) as (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => void);


export default app;  