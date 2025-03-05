import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { Cliente } from "./Cliente";
import { Produto } from "./Produto";


@Entity()
export class Pedido {
    @PrimaryGeneratedColumn('uuid')
    id!: string;


    @Column()
    dataCriacao!: Date;


    @Column({ nullable: true })
    dataLimiteEntrega!: Date;


    @Column({ nullable: true })
    prazoEntrega!: number;


    @Column({ nullable: true })
    entregueEm!: Date;


    @Column({ default: "Novo" })
    status!: string;


    @Column({ default: false })
    pago!: boolean;


    @ManyToOne(() => Cliente, cliente => cliente.pedidos)
    cliente!: Cliente;


    @ManyToMany(() => Produto, produto => produto.pedidos, { nullable: true })
    @JoinTable()
    itens!: Produto[];
}