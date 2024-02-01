import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Application} from "../../application/entities/application.entity";
import {JoinTable} from "typeorm";
import {ApplicationGroup} from "../../application/entities/application-group.entity";


@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    login: string;

    @Column()
    password:string;

    @OneToMany(()=>Application, applications => applications.user)
    @JoinTable()
    applications: Application

    @OneToMany(()=>ApplicationGroup, applicationsGroup => applicationsGroup.user)
    @JoinTable()
    applicationsGroup: ApplicationGroup


}
