import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ChildEntity } from 'typeorm';
import { Documento } from "./Documento";

@ChildEntity()
export class Presupuesto extends Documento {

    @PrimaryGeneratedColumn()
    id: number = 0;

}
