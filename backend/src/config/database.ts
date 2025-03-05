import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "canoa",
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    synchronize: true, // Apenas para ambiente de DEV
    logging: false,
    subscribers: []
});