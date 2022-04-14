import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString, Length, MaxLength, MinLength } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {

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
