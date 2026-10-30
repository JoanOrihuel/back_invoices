import { Entity, PrimaryGeneratedColumn } from "typeorm"
import { Documento } from "./Documento";

@Entity()
export class Presupuesto extends Documento {
    @PrimaryGeneratedColumn()
    id: number = 0;

}
