import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {JoinColumn} from "typeorm";

@Entity("application_group")
export class ApplicationGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    surname: string;

    @Column()
    lastname: string;

    @Column({nullable: true})
    numberPhone: string;

    @Column()
    passport: string;

    @Column()
    birthday: Date;

    @Column({nullable: true})
    organization: string;

    @Column()
    note: string;

    @Column({nullable: true})
    personPhoto: string;

    @Column({nullable: true})
    passportScan: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    visitPurpose: string

    @Column()
    accept: boolean

    @Column({nullable:true})
    listPeople: string

    @ManyToOne(() => User, user => user.applicationsGroup)
    @JoinColumn({name: 'user_id'})
    user: User
}
