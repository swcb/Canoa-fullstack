import { IsString, IsOptional, ValidateNested, IsArray, IsDate, IsNumber, IsBoolean } from "class-validator";
import { Type } from 'class-transformer';
import { ClienteDTO } from "./ClienteDTO";
import { ProdutoDTO } from "./ProdutoDTO";

export class PedidoDTO {
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    dataCriacao?: Date;


    @IsOptional()
    @Type(() => Date)
    @IsDate()
    dataLimiteEntrega?: Date;


    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    prazoEntrega?: number;
    

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    entregueEm?: Date;
    

    @IsOptional()
    @IsString()
    status?: string;
    

    @IsOptional()
    @IsBoolean()
    pago?: boolean;


    @IsOptional()
    @ValidateNested()
    @Type(() => ClienteDTO)
    cliente?: ClienteDTO;


    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProdutoDTO)
    itens?: ProdutoDTO[];
}