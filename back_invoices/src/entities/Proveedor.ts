import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AgenteComercial } from "./AgenteComercial";

@Entity()
export class Proveedor extends AgenteComercial {
    @PrimaryGeneratedColumn()
    id:number=0
    @Column()
    cif: string = "";
}