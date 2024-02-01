import {Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Worker} from "./worker.entity";

@Entity("department")
export class Department{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @OneToMany(()=>Worker, worker => worker.department)
    @JoinTable()
    workers: Worker


}