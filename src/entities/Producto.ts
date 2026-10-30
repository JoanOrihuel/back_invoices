import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column()
    nombre: string = "";
    @Column("decimal", { precision: 10, scale: 2, default: 0 })
    stock: number = 0;
    @OneToMany(() => Transaccion, transaccion => transaccion.producto)
    transacciones: Transaccion[] = [];
    @OneToMany(() => Distribucion, distribucion => distribucion.producto)
    distribuciones: Distribucion[] = [];

}
