import express from "express";
import deliveryRoutes from "./routes/deliveryRoutes";  
import clienteRoutes from "./routes/clienteRoutes";
import produtoRoutes from "./routes/produtoRoutes";
import pedidoRoutes from "./routes/pedidoRoutes";
import enderecoRoutes from "./routes/enderecoRoutes";

const app = express();
app.use(express.json());


app.use("/deliveries", deliveryRoutes);
app.use("/clientes", clienteRoutes);
app.use("/produtos", produtoRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/enderecos", enderecoRoutes);


export default app;  