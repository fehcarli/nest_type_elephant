import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsString, Length, MaxLength, MinLength } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {

    @IsString({ always: true })
    @MinLength( 3, { always: true })
    @MaxLength(50)
    Name: string;

    @IsDate({ always: true })
    ReleaseDate: Date;

    @Length(12)
    ISBN: string;
}
