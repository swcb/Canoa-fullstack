import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Cliente } from "./Cliente";


@Entity()
export class Endereco {
    @PrimaryGeneratedColumn('uuid')
    id!: string;


    @Column()
    cep!: string;
    
    
    @Column()
    rua!: string;


    @Column()
    numero!: string;


    @Column()
    bairro!: string;


    @Column()
    cidade!: string;


    @Column()
    estado!: string;



    @Column({ nullable: true })
    complemento!: string;


    @Column()
    referencia!: string;


    @OneToMany(() => Cliente, cliente => cliente.endereco, { nullable: true })
    clientes!: Cliente[];
}