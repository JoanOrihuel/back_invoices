import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Transaccion } from "./Transaccion";
@Entity()

export class Documento {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @OneToMany(
    () => Transaccion,transaccion => transaccion.documento,)
    transacciones: Transaccion[];
    
}
