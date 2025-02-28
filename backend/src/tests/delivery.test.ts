import request from "supertest";
import app from "../app";

describe("Testando fluxo de Delivery", () => {

    it("Deve criar uma entrega", async () => {
        const delivery = await request(app).post("/deliveries").send({
            customerName: "Teste da Silva",
            address: "Rua test, número 23"
        });
        
        expect(delivery.body).toHaveProperty("id");
    });

    it("Deve retornar todas as entregas", async () => {
        const deliveries = await request(app).get("/deliveries");

        expect(Array.isArray(deliveries.body)).toBe(true);
    })

});