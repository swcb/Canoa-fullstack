import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { Endereco } from "./Endereco";
import { Pedido } from "./Pedido";


@Entity()
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id!: string;


    @Column()
    nome!: string;


    @Column({ nullable: true })
    email!: string;

    
    @Column()
    telefone!: string;


    @ManyToOne(() => Endereco, endereco => endereco.clientes)
    endereco!: Endereco;


    @OneToMany(() => Pedido, pedido => pedido.cliente, { nullable: true })
    pedidos!: Pedido[];
}