import { Request, Response, NextFunction } from "express";
import { ClienteController } from "../../controllers/ClienteController";
import { ClienteService } from "../../services/ClienteService";
import { ClienteDTO } from "../../dtos/ClienteDTO";
import { mock } from "jest-mock-extended";
import { Cliente } from "../../entities/Cliente";


jest.mock("../../services/ClienteService");


describe("ClienteController", () => {
    let clienteController: ClienteController;
    let clienteServiceMock: jest.Mocked<ClienteService>;
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;
    
    
    beforeEach(() => {
        clienteServiceMock = new ClienteService() as jest.Mocked<ClienteService>;
        clienteController = new ClienteController();
        (clienteController as any).clienteService = clienteServiceMock;

        req = { body: {} };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        next = jest.fn();
    })


    it("deve criar um cliente e retornar status 201", async () => {
        const clienteMock: ClienteDTO = { nome: "Teste", email: "teste@email.com", telefone: "79999887766"};
        const clienteCriadoMock: Cliente = {id: "1", nome: "Teste", telefone: "79999887766"};
        clienteServiceMock.criarCliente.mockResolvedValue(clienteCriadoMock);

        req.body = clienteMock;

        await clienteController.criarCliente(req as Request, res as Response, next);
        
        expect(clienteServiceMock.criarCliente).toHaveBeenCalledWith(clienteMock);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(clienteCriadoMock);
    })


    it("deve retornar erro ao tentar criar cliente", async () => {
        const error = new Error("Erro ao salvar");
        clienteServiceMock.criarCliente.mockRejectedValue(error);

        await clienteController.criarCliente(req as Request, res as Response, next);

        expect(next).toHaveBeenCalledWith(error);
    })

})