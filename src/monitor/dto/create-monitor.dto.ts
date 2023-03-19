import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMonitorDto {

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