import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, Transaccio, OneToMany } from "typeorm"

@Entity()
@TableInheritance({
  column: {
    type: 'varchar',
    name: 'tipus',
  },
})
export class Documento {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @OneToMany(
    () => Transaccio,
    transaccio => transaccio.document,
  )
  transaccions: Transaccio[];
    
}
