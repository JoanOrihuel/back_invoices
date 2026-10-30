import { Entity, PrimaryGeneratedColumn, Column, ChildEntity, OneToMany } from "typeorm"
import { Document } from "./Document";
import { Albaran } from "./Albaran";

@ChildEntity()
export class Factura extends Document {

     @PrimaryGeneratedColumn()
    id: number = 0;
    
    @OneToMany(
    () => Albaran,albaran => albaran.factura)
    albarans: Albaran[];

}
