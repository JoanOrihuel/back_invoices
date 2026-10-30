import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, Transaccio, OneToMany } from "typeorm"

@Entity()
export class Document {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @OneToMany(
    () => Transaccio,transaccio => transaccio.document,)
    transaccions: Transaccio[];
    
}
