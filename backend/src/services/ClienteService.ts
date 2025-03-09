import { ClienteRepository } from "../repositories/ClienteRepositories";
import { Cliente } from "../entities/Cliente";


interface ClienteDTO {
    nome: string;
    email?: string;
    telefone:string;
}

export class ClienteService {
    private clienteRepository: ClienteRepository;

    
    constructor() {
        this.clienteRepository = new ClienteRepository();
    }


    async criarCliente(clientData: ClienteDTO): Promise<Cliente> {
        const cliente = await this.clienteRepository.create(clientData);
        return this.clienteRepository.save(cliente);
    }


    async lerTodosClientes(): Promise<Cliente[]> {
        return this.clienteRepository.find();
    }


    async lerCliente(id: string): Promise<Cliente | null> {
        return this.clienteRepository.findOne(id);
    }


    async atualizarCliente(id: string, clienteData: ClienteDTO): Promise<Cliente> {
        const cliente = await this.clienteRepository.findOne(id);
        if(!cliente){
            throw new Error('Cliente não encontrado');
        }
        Object.assign(cliente, clienteData);
        return this.clienteRepository.save(cliente);
    }


    async excluirCliente(id: string): Promise<void> {
        const cliente = await this.clienteRepository.findOne(id);
        if(!cliente){
            throw new Error('Cliente não encontrado');
        }
        await this.clienteRepository.remove(cliente);
    }
}