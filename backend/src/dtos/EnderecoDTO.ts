import { IsString, IsOptional, ValidateNested, IsArray } from "class-validator";
import { Type } from 'class-transformer';
import { ClienteDTO } from "./ClienteDTO";

export class EnderecoDTO {
    @IsString()
    cep!: string;


    @IsString()
    rua!: string;


    @IsString()
    numero!: string;
    

    @IsString()
    bairro!: string;
    

    @IsString()
    cidade!: string;
    

    @IsString()
    estado!: string;
    

    @IsOptional()
    @IsString()
    complemento?: string;
    

    @IsString()
    referencia!: string;


    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClienteDTO)
    clientes?: ClienteDTO[];
}
