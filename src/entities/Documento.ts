import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, Transaccio, OneToMany } from "typeorm"

@Entity()
<<<<<<< HEAD:src/entities/Document.ts
export class Document {
=======
@TableInheritance({
  column: {
    type: 'varchar',
    name: 'tipus',
  },
})
export class Documento {
>>>>>>> c268cdff9b0899b80724fb30e5b38981824699ed:src/entities/Documento.ts

    @PrimaryGeneratedColumn()
    id: number = 0;

    @OneToMany(
    () => Transaccio,transaccio => transaccio.document,)
    transaccions: Transaccio[];
    
}
