import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ChildEntity } from 'typeorm';
import { Documento } from "./Documento";

@ChildEntity()
export class Configuracion extends Documento {

    @PrimaryGeneratedColumn()
    id: number = 0;

}
