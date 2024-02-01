import {Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Worker} from "./worker.entity";

@Entity("subdivision")
export class Subdivision{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @OneToMany(()=>Worker, worker => worker.subdivision)
    @JoinTable()
    workers: Worker


}