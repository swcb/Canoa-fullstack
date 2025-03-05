import { IsString, IsEmail, IsOptional, IsPhoneNumber } from "class-validator/types";

export class ClienteDTO {
    @IsString()
    nome!: string;

    
    @IsOptional()
    @IsEmail()
    email?:string;


    @IsPhoneNumber(undefined)
    telefone!: string;
}