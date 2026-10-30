import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";

@Entity()
export class Local {
    @PrimaryGeneratedColumn()
    id:number=0
    @Column()
    nombre:string="";
    @Column()
    direccion:string="";
    @OneToMany(()=>Cliente,cliente=>cliente.local)
    clientes:Cliente[];
}
