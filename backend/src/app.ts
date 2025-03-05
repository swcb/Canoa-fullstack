import express from "express";
import deliveryRoutes from "./routes/deliveryRoutes";  
import clienteRoutes from "./routes/clienteRoutes";


const app = express();
app.use(express.json());


app.use("/deliveries", deliveryRoutes);
app.use("/clientes", clienteRoutes);


export default app;  