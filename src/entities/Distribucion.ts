import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Distribucion {
    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column()
    lote: string = "";
    @Column()
    cantidad: number = 0;
    @ManyToOne(() => Almacen, almacen => almacen.distribuciones)
    almacen: Almacen;
    @ManyToOne(() => Producto, producto => producto.distribuciones)
    producto: Producto;

}
