import { IsString, IsOptional, ValidateNested, IsArray } from "class-validator";
import { Type } from 'class-transformer';
import { PedidoDTO } from "./PedidoDTO";

export class ProdutoDTO {
    @IsString()
    nome!: string;
    

    @IsOptional()
    @IsString()
    descricao?: string;


    @IsOptional()
    @IsString()
    preco?: string;


    @IsOptional()
    @IsString()
    categoria?: string;


    @IsOptional()
    @IsString()
    subcategoria?: string;

    
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PedidoDTO)
    pedidos?: PedidoDTO[];
}