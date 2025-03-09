import { EnderecoRepositories } from "../repositories/EnderecoRepositorie";
import { Endereco } from "../entities/Endereco";
import { Cliente } from "../entities/Cliente";


interface EnderecoDTO {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento?: string;
    referencia: string;
    clientes?: Cliente[];
}


export class EnderecoService {
    private enderecoRepositories: EnderecoRepositories;


    constructor() {
        this.enderecoRepositories = new EnderecoRepositories();
    }


    async criarEndereco(enderecoData: EnderecoDTO): Promise<Endereco>{
        const endereco = await this.enderecoRepositories.create(enderecoData);
        return this.enderecoRepositories.save(endereco);
    }


    async lerTodosEnderecos(): Promise<Endereco[]>{
        return this.enderecoRepositories.find()
    }


    async LerEndereco(id: string): Promise<Endereco | null>{
        return this.enderecoRepositories.findOne(id);
    }


    async atualizarEndereco(id: string, enderecoData: EnderecoDTO): Promise<Endereco>{
        const endereco = await this.enderecoRepositories.findOne(id);
        if(!endereco){
            throw new Error('Endereco não encontrado');
        }
        Object.assign(endereco, enderecoData);
        return this.enderecoRepositories.save(endereco);
    }


    async excluirEndereco(id: string): Promise<void>{
        const endereco = await this.enderecoRepositories.findOne(id);
        if(!endereco){
            throw new Error('Endereco não encontrado');
        }
        await this.enderecoRepositories.remove(endereco);
    }
}