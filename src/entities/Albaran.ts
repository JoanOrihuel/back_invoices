import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Documento } from "./Documento";
import { Factura } from "./Factura";

@Entity()
export class Albaran extends Documento{
    @PrimaryGeneratedColumn()
    id:number=0;

    @ManyToOne(()=>Factura,factura=>factura.albarans)
    factura:Factura
}
