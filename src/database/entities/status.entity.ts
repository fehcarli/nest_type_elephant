
import { Entity, 
    PrimaryGeneratedColumn, Column, 
    //OneToMany, 
    CreateDateColumn, UpdateDateColumn } from "typeorm";
// import { Book } from "./book.entity";

@Entity()
export class Status {
    @PrimaryGeneratedColumn("uuid")
    Id: string;

    @Column({ type: "varchar", length: "50"})
    Name: string;

    // @OneToMany(type => Book, book => book.Status)
    // Books: Book[];

    @CreateDateColumn()
    public createdAt;

    @UpdateDateColumn()
    public updatedAt;
}