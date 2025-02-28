import express from "express";
import deliveryRoutes from "./routes/deliveryRoutes";  
import { inicializeDatabase } from "./config/database"

const app = express();
const port = 3000;


app.use(express.json());


app.use("/deliveries", deliveryRoutes);


inicializeDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
});

export default app;  