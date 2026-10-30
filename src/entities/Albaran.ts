import { Entity, PrimaryGeneratedColumn, Column, ChildEntity, ManyToOne } from "typeorm"
import { Documento } from "./Documento";
import { Factura } from "./Factura";

@ChildEntity()
export class Albaran extends Documento{
    @PrimaryGeneratedColumn()
    id:number=0;

    @ManyToOne(()=>Factura,factura=>factura.albarans)
    factura:Factura
}
