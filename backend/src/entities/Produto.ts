import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Pedido } from "./Pedido";


@Entity()
export class Produto {
    @PrimaryGeneratedColumn('uuid')
    id!: string;


    @Column()
    nome!: string;


    @Column({ nullable: true })
    descricao!: string;


    @Column('float')
    preco!: string;


    @Column({ nullable: true })
    categoria!: string;


    @Column({ nullable: true })
    subcategoria!: string;


    @ManyToMany(() => Pedido, pedido => pedido.itens)
    pedidos!: Pedido[];
}