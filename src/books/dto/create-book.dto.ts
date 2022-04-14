import { IsDate, IsString, Length, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'
export class CreateBookDto {

    @ApiProperty()
    @IsString({ always: true })
    @MinLength( 3, { always: true })
    @MaxLength(50)
    Name: string;

    @ApiProperty()
    @IsDate({ always: true })
    ReleaseDate: Date;

    @ApiProperty()
    @Length(12)
    ISBN: string;

}
