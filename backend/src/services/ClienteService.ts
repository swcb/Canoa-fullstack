import { ClienteRepositories } from "../repositories/ClienteRepositories";
import { Cliente } from "../entities/Cliente";
import { ClienteDTO } from "../dtos/ClienteDTO";
import { ApplicationError } from "../errors/ApplicationError";


export class ClienteService {
    private clienteRepositories: ClienteRepositories;

    
    constructor() {
        this.clienteRepositories = new ClienteRepositories();
    }


    async criarCliente(clientData: ClienteDTO): Promise<Cliente> {
        try {
            const cliente = await this.clienteRepositories.create(clientData);
            return this.clienteRepositories.save(cliente);
        } catch (err) {
            throw new ApplicationError('Erro ao salvar o Cliente no Banco de Dados');
        }
    }


    async lerTodosClientes(): Promise<Cliente[]> {
        return this.clienteRepositories.find();
    }


    async lerCliente(id: string): Promise<Cliente | null> {
        return this.clienteRepositories.findOne(id);
    }


    async atualizarCliente(id: string, clienteData: ClienteDTO): Promise<Cliente> {
        const cliente = await this.clienteRepositories.findOne(id);
        if(!cliente){
            throw new Error('Cliente não encontrado');
        }
        Object.assign(cliente, clienteData);
        return this.clienteRepositories.save(cliente);
    }


    async excluirCliente(id: string): Promise<void> {
        const cliente = await this.clienteRepositories.findOne(id);
        if(!cliente){
            throw new Error('Cliente não encontrado');
        }
        await this.clienteRepositories.remove(cliente);
    }
}