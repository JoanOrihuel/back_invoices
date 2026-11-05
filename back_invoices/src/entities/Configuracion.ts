import { Entity, PrimaryGeneratedColumn } from "typeorm"
import { Documento } from "./Documento";

@Entity()
export class Configuracion extends Documento {
    @PrimaryGeneratedColumn()
    id: number = 0;

}
