import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Exclude()
    password: string;

}