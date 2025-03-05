import { Delivery } from "../../entities/Delivery";
import { testDataSource } from "../../config/data-source.test"; // Importa a configuração do banco de testes
import { Repository } from "typeorm";
import { DeliveryRepository } from "../../repositories/DeliveryRepositories";


let deliveryRepository: DeliveryRepository;


beforeAll(async () => {
    await testDataSource.initialize();
    deliveryRepository = new DeliveryRepository(testDataSource);
});

afterAll(async () => {
    await testDataSource.destroy();
});


test("Deve criar uma nova entrerga", async () => {
    await deliveryRepository.create({
        customerName: "Teste da Silva",
        address: "rua teste, 22"
    });

    const savedDelivery = await deliveryRepository.findOneBy({ address: "rua teste, 22" });

    expect(savedDelivery).toBeDefined();
    expect(savedDelivery?.customerName).toBe("Teste da Silva");
});