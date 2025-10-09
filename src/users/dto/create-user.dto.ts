import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty ({required: true, example: 'usuario@empresa.com'})

    email: string;

    @ApiProperty ({required: true, example: 'John Doe'})
    name: string;

    @ApiProperty ({required: true, example: '8966-2494'})
    telephone: string;

    username?: string;

    @ApiProperty ({required: true, example: 'pasword123'})
    password: string;

    @ApiProperty ({required: true, example: 1, description: 'Id del Tenant'})
    tenantId: number;
}
