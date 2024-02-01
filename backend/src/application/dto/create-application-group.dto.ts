import {IsDate, IsPhoneNumber, IsString, Length} from "class-validator";

export class CreateApplicationGroupDto {

    @IsString()
    firstname:string;

    @IsString()
    surname:string;

    @IsString()
    lastname: string;

    @IsPhoneNumber()
    numberPhone?: string;

    @Length(11,11)
    passport: string;

    @IsDate()
    birthday: Date;

    @IsString()
    organization?: string;

    @IsString()
    note: string;

    @IsDate()
    startDate: Date;

    @IsDate()
    endDate: Date;

    @IsString()
    visitPurpose:string
}