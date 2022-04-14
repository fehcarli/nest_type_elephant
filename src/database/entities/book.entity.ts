import { Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    // JoinColumn, ManyToOne, 
    //RelationId, ManyToMany, 
    CreateDateColumn, UpdateDateColumn } from "typeorm";
import {IsString, MinLength, IsDefined} from 'class-validator'    
// import { Status } from "./status.entity";
// import { Author } from "./author.entity";

@Entity()
export class Book {

    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column({ type: "varchar", length: "300" })
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength( 3, { always: true })
    Name: string;

    @Column({ type: "date" })
    ReleaseDate: Date;

    @Column({ type: "varchar", length: "30" })
    ISBN: string;

    // @JoinColumn({ name: "StatusId", referencedColumnName: "Id" })
    // @ManyToOne(type => Status, status => status.Books)
    // Status: Status;

    // @RelationId((book: Book) => book.Status)
    // StatusId: string;

    // @ManyToMany(type => Author)
    // Authors: Author[];

    @CreateDateColumn()
    public createdAt;

    @UpdateDateColumn()
    public updatedAt;

    constructor(book?: Partial<Book>) {
        this.uuid = book?.uuid;
        this.Name = book?.Name;
        this.ReleaseDate = book?.ReleaseDate;
        this.ISBN = book?.ISBN;
      }
}