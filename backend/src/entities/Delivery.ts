import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";


@Entity("deliveries")
export class Delivery {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    customerName!: string;

    @Column()
    address!: string;

    @Column({default: "aberto"})
    status!: string;

    @CreateDateColumn()
    createdAt!: Date;
}