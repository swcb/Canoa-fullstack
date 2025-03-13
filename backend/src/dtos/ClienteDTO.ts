import { IsString, IsEmail, IsOptional, IsPhoneNumber, ValidateNested, IsArray } from "class-validator";
import { Type } from 'class-transformer';
import { EnderecoDTO } from "./EnderecoDTO";
import { PedidoDTO } from "./PedidoDTO";

export class ClienteDTO {
    @IsString()
    nome!: string;


    @IsOptional()
    @IsEmail()
    email?:string;


    @IsPhoneNumber("BR")
    telefone!: string;


    @IsOptional()
    @ValidateNested()
    @Type(() => EnderecoDTO)
    endereco?: EnderecoDTO;


    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PedidoDTO)
    pedidos?: PedidoDTO[];
}