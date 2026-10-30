import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaccion } from "./Transaccion";
import { Distribucion } from "./Distribucion";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column()
    nombre: string = "";
    @Column()
    stock: number = 0;
    @OneToMany(() => Transaccion, transaccion => transaccion.producto)
    transacciones: Transaccion[] = [];
    @OneToMany(() => Distribucion, distribucion => distribucion.producto)
    distribuciones: Distribucion[] = [];

}
