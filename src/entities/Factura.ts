import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Documento } from "./Documento";
import { Albaran } from "./Albaran";

@Entity()
export class Factura extends Documento {
     @PrimaryGeneratedColumn()
    id: number = 0;
    
    @OneToMany(() => Albaran,albaran => albaran.factura)
    albarans: Albaran[];

}
