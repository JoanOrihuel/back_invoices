import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ChildEntity } from 'typeorm';

@ChildEntity()
export class Configuracio {

    @PrimaryGeneratedColumn()
    id: number = 0;

}
