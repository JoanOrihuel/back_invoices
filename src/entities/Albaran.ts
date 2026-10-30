import { Entity, PrimaryGeneratedColumn, Column, ChildEntity, ManyToOne } from "typeorm"
import { Document } from "./Document";
import { Factura } from "./Factura";

@ChildEntity()
export class Albaran extends Document{

    @PrimaryGeneratedColumn()
    id: number = 0;

    @ManyToOne(
    () => Factura,
    factura => factura.albarans);

}
