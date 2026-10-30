import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    stock: number=0

    @Column()
    nombre: string = "";

}