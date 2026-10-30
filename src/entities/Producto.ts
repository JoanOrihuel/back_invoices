import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AgenteComercial } from "./AgenteComercial";

@Entity()
export class Proveedor extends AgenteComercial {
    @PrimaryGeneratedColumn()
    id:number=0

    @Column()
    stock: number=0

    @Column()
    nombre: string = "";

}