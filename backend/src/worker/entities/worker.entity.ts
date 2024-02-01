import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Subdivision} from "./subdivision.entity";
import {Department} from "./department.entity";

@Entity("worker")
export class Worker {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstname: string;

    @Column()
    surname: string;

    @Column()
    lastname: string;


    @Column()
    codeWorker: string

    @ManyToOne(() => Subdivision, subdivision => subdivision.workers,{nullable:true})
    @JoinColumn({name: 'subdivision_id'})
    subdivision: Subdivision

    @ManyToOne(() => Department, department => department.workers,{nullable:true})
    @JoinColumn({name: 'department_id'})
    department: Department


}
