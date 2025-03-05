import { DataSource } from "typeorm";

export const testDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "canoa_test",
  synchronize: true,
  dropSchema: true,
  entities: ["src/entities/*.ts"]
});