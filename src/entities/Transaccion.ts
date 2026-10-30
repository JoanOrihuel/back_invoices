import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UnidadMedida } from "./UnidadMedida";
import { Producto } from "./Producto";
import { Documento } from "./Documento";
import { AgenteComercial } from "./AgenteComercial";

@Entity()
export class Transaccion {
    @PrimaryGeneratedColumn()
    id:number=0
    @Column()
    data: Date = new Date()
    @Column()
    mesura: string = "";
    @Column()
    preu_unitari: number = 0;
    @Column()
    unitats: number = 0;
    @Column()
    cantitat: number = 0;
    @Column()
    lot: string = "";
    @Column()
    iva: number = 0;
    @Column()
    unidadMedida: UnidadMedida = UnidadMedida.UNIDAD;
    @ManyToOne(() => Producto, producto => producto.transacciones)
    producto: Producto;
    @ManyToOne(() => AgenteComercial)
    agenteComercial: AgenteComercial;
    @ManyToOne(() => Documento, documento => documento.transacciones)
    documento: Documento;

}