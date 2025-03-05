import request from "supertest";
import app from "../../app";
import { AppDataSource } from "../../config/database"; 


beforeAll(async () => {
  await AppDataSource.initialize(); 
})

afterAll(async () => {
  await AppDataSource.destroy(); // Fecha a conexão com o banco de dados
});


test("Deve criar uma entrega via post", async () => {
    const response = await request(app)
        .post("/deliveries")
        .send({
            customerName: "Teste Post Santos", 
            address: "Rua post, 22"
        });

    //expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.customerName).toBe("Teste Post Santos")
})