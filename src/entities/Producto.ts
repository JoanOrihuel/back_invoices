<<<<<<< HEAD
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
=======
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
>>>>>>> c268cdff9b0899b80724fb30e5b38981824699ed

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
<<<<<<< HEAD
    id: number = 0;
    @Column()
    nombre: string = "";
    @Column("decimal", { precision: 10, scale: 2, default: 0 })
    stock: number = 0;
    @OneToMany(() => Transaccion, transaccion => transaccion.producto)
    transacciones: Transaccion[] = [];
    @OneToMany(() => Distribucion, distribucion => distribucion.producto)
    distribuciones: Distribucion[] = [];

}
=======
    id:number=0

    @Column()
    stock: number=0

    @Column()
    nombre: string = "";

}
>>>>>>> c268cdff9b0899b80724fb30e5b38981824699ed
