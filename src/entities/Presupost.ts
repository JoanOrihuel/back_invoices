import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ChildEntity } from 'typeorm';
import { Document } from "./Document";

@ChildEntity()
export class Presupost extends Document {

    @PrimaryGeneratedColumn()
    id: number = 0;

}
