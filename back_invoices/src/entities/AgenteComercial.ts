import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AgenteComercial {
    @PrimaryGeneratedColumn()
    id:number=0
    @Column()
    nombre:string=""
    @Column()
    email:string=""
    @Column()
    telefono:string=""
}