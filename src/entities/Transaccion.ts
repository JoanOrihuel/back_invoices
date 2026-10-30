import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AgenteComercial } from "./AgenteComercial";
import { UnidadMedida } from "./UnidadMedida";

@Entity()
export class Proveedor extends AgenteComercial {
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

    @Column({
    type: 'enum',
    enum: UnidadMedida
})
    unidad_medida!: UnidadMedida;

    @ManyToOne(()=> Producto

    )

}