import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
    @ApiProperty({required: true, example: 'nombre@empresa.com'})
    email: string;

    @ApiProperty({required: true, example: '123456'})
    password: string;
}
