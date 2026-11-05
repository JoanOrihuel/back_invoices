import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Distribucion } from "./Distribucion";

@Entity()
export class Almacen {
    @PrimaryGeneratedColumn()
    id:number=0;
    @Column()
    nombre:string="";
    @Column()
    ubicacion:string="";
    @OneToMany(()=>Distribucion,distribucion=>distribucion.almacen)
    distribuciones:Distribucion[];
    
}
