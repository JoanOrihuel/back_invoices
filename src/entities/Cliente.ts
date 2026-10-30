import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AgenteComercial } from "./AgenteComercial";
import { ICliente } from "./ICliente";
import { Local } from "./Local";


@Entity()
export class Cliente extends AgenteComercial implements ICliente {
    @PrimaryGeneratedColumn()
    id:number=0
    @Column()
    dni: string=""
    @Column()
    nombre:string=""

    @ManyToOne(()=>Local,(local=>local.clientes))
    local:Local
}