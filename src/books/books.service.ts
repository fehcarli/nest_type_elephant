import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from '../database/entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ){}

  async create(createBookDto: CreateBookDto) {
    return this.bookRepository.save(createBookDto);
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findOne(uuid: string): Promise<Book> {
    const book = await this.bookRepository.findOne({
      where: {uuid}
    });
    if(!book){
      throw new NotFoundException();
    }
    return book;
  }

  async update(uuid: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.bookRepository.findOne({
      where: {uuid}
    });
    if(!book){
      throw new NotFoundException();
    }
    await this.bookRepository.update(uuid, updateBookDto);
    return book;
  }

  async remove(uuid: string) {
    const book = await this.bookRepository.delete(uuid);
    if(!book.affected){
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
  }
}
