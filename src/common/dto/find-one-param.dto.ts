import { IsNumberString } from "class-validator";

export class FindOneParamDto {

    @IsNumberString()
    id: number;
}