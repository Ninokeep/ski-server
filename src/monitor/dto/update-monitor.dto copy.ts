import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateMonitorDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsString()
    password: string;
}