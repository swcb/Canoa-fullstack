import app from './app';
import { AppDataSource } from './config/database';


const PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV !== "test") {
  AppDataSource.initialize()
    .then(() => {
        console.log('Banco de dados conectado');
        app.listen(PORT, () => {
          console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
      console.error('Erro ao conectar no banco de dados:', error);
    });
}
