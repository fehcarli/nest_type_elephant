import { IsDate, IsString, Length, MinLength, MaxLength } from 'class-validator';

export class CreateBookDto {

    @IsString({ always: true })
    @MinLength( 3, { always: true })
    @MaxLength(50)
    Name: string;

    @IsDate({ always: true })
    ReleaseDate: Date;

    @Length(12)
    ISBN: string;

}
